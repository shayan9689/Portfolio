import { lazy, Suspense } from "react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <>
      <LoadingProvider>
        <Suspense
          fallback={
            <div
              style={{
                width: "100vw",
                height: "100vh",
                background: "#0a0e17",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5eead4",
                fontFamily: "Geist, sans-serif",
              }}
            >
              Loading…
            </div>
          }
        >
          <MainContainer>
            <Suspense fallback={null}>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
};

export default App;
