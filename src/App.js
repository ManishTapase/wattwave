import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const LandingPage = React.lazy(() => import("./Components/LandingPage"));
const Main = React.lazy(() => import("./Sections/Main"));
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errInfo) {
    console.error("ErrorBoundary caugth :", error, errInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong. Please try again later.</div>;
    } else {
      return this.props.children;
    }
  }
}

const routes = [
  // { path: "/", component: LandingPage },
  { path: "/home", component: Main },
];

const App = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="*" element={<LandingPage />} />
          {routes.map(({ path, component: Component }, index) => (
            <Route key={index} path={`${path}`} element={<Component />} />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
