import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CdkTreeModule } from '@angular/cdk/tree';
import { NbTreeGridModule, NbButtonModule, NbCheckboxModule, NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';


interface TreeNode {
  name: string;
  children?: TreeNode[];
  expanded?: boolean;
  checked?: boolean;
  indeterminate?: boolean;
  id?: number;
  label?: string;
  code?: string;
  [key: string]: any;
}

@Component({
  selector: 'scl-treeview',
  templateUrl: './treeview.html',
  standalone: true,
  imports: [
    CommonModule,
    CdkTreeModule,
    NbTreeGridModule,
    NbButtonModule,
    NbCheckboxModule,
    NbIconModule,
  ]
})
export class SclTreeview {
  @Output() selectionChange: EventEmitter<any> = new EventEmitter<any>();

  @Input() bindLabel = 'label';
  @Input() bindValue = 'id';
  @Input() set dataSource(data: TreeNode[]) {
    if (data) {
      this.expandAllNodes(data);
      this.treeNodes = data;
    }
  }

  get dataSource() {
    return this.treeNodes
  }

  private treeNodes!: TreeNode[];

  expandAllNodes(nodes: TreeNode[]): void {
    for (const node of nodes) {
      if (node.children) {
        node.expanded = true;
        this.expandAllNodes(node.children);
      }
    }
  }

  toggleAllSelection(): void {
    const allSelected = this.isAllSelected(this.dataSource);
    if (allSelected) {
      this.uncheckAllNodes(this.dataSource);
    } else {
      this.checkAllNodes(this.dataSource);
    }

    this.emitCheckedNodes();
  }

  checkAllNodes(nodes: TreeNode[]): void {
    for (const node of nodes) {
      node.checked = true;
      node.indeterminate = false;
      if (node.children) {
        this.checkAllNodes(node.children);
      }
    }
  }

  uncheckAllNodes(nodes: TreeNode[]): void {
    for (const node of nodes) {
      node.checked = false;
      node.indeterminate = false;
      if (node.children) {
        this.uncheckAllNodes(node.children);
      }
    }
  }

  isAllSelected(nodes: TreeNode[]): boolean {
    for (const node of nodes) {
      if (!node.checked) {
        return false;
      }
      if (node.children) {
        if (!this.isAllSelected(node.children)) {
          return false;
        }
      }
    }
    return true;
  }


  toggleNodeSelection(node: TreeNode): void {
    if (node.checked) {
      node.checked = false;
      node.indeterminate = false;
      this.uncheckChildren(node);
      this.updateParentNode(node);
    } else {
      node.checked = true;
      node.indeterminate = false;
      this.checkChildren(node);
      this.updateParentNode(node);
    }

    this.emitCheckedNodes();
  }

  updateParentNode(node: TreeNode): void {
    const parentNode: any = this.getParentNode(node);
    if (parentNode) {
      const allSelected = parentNode.children.every((child: any) => child.checked);
      const someSelected = parentNode.children.some((child: any) => child.checked || child.indeterminate);

      parentNode.checked = allSelected;
      parentNode.indeterminate = !allSelected && someSelected;

      this.updateParentNode(parentNode);
    }
  }

  getParentNode(node: TreeNode): TreeNode | null {
    const stack: TreeNode[] = [...this.dataSource];
    while (stack.length > 0) {
      const currNode = stack.pop();
      if (currNode && currNode.children) {
        for (const child of currNode.children) {
          if (child === node) {
            return currNode;
          }
          stack.push(child);
        }
      }
    }
    return null;
  }

  checkChildren(node: TreeNode): void {
    if (node.children) {
      for (const child of node.children) {
        child.checked = true;
        child.indeterminate = false;
        this.checkChildren(child);
      }
    }
  }

  uncheckChildren(node: TreeNode): void {
    if (node.children) {
      for (const child of node.children) {
        child.checked = false;
        child.indeterminate = false;
        this.uncheckChildren(child);
      }
    }
  }

  emitCheckedNodes(): void {
    const selectedValues: number[] = [];
    const treeViewItems: TreeNode[] = [];
    this.traverseCheckedNodes(this.dataSource, selectedValues);
    this.traverseCheckedItems(this.dataSource, treeViewItems);
    this.selectionChange.emit({ selectedValues, treeViewItems });
  }

  traverseCheckedNodes(nodes: TreeNode[], selectedValues: number[]): void {
    for (const node of nodes) {
      if (node.checked && node[this.bindValue] !== undefined) {
        selectedValues.push(node[this.bindValue]);
      }
      if (node.children) {
        this.traverseCheckedNodes(node.children, selectedValues);
      }
    }
  }

  traverseCheckedItems(nodes: TreeNode[], treeViewItems: TreeNode[]): void {
    for (const node of nodes) {
      if (node.checked || node.indeterminate) {
        const parentNode = {
          name: node.name,
          label: node.label,
          children: []
        };
        treeViewItems.push(parentNode);
        if (node.children) {
          this.traverseCheckedItems(node.children, parentNode.children);
        }
      } else if (node.children) {
        this.traverseCheckedItems(node.children, treeViewItems);
      }
    }
  }
}
