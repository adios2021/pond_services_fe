import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
    barColors: {
        '0': '#FF9800',
        '1.0': '#FF9800',
    },
    shadowBlur: 5,
});

const Loader = () => {
    return <TopBarProgress />
}

export default Loader;