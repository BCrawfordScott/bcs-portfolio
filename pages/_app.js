import '../styles/global.css'; // Import is enough to add the styles

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
