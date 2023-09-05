import { embedDashboard } from "@superset-ui/embedded-sdk";

const element = document.getElementById('my-superset-container');
if (element) {
    embedDashboard({
        id: '917459f2-e2dc-41a6-8af2-0bafa54cb6c1', // given by the Superset embedding UI
        supersetDomain: 'http://localhost:8080',
        mountPoint: element, // any html element that can contain an iframe
        // fetchGuestToken: () => fetchGuestTokenFromBackend(),
        fetchGuestToken: () => fetchGuestTokenFromBackend(),
        dashboardUiConfig: {
            // dashboard UI config: hideTitle, hideTab, hideChartControls, filters.visible, filters.expanded (optional)
            hideTitle: true,
            filters: {
                expanded: false
            },
            hideTab: true,
            hideChartControls: true
        },
    });
}

function fetchGuestTokenFromBackend(): Promise<string> {
    throw new Error("Function not implemented.");
}


