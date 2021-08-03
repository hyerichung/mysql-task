import { Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AlbumDetailContainer from "../containers/AlbumDetailsContainer";
import AlbumsContainer from "../containers/AlbumsContainer";
import PlayerContainer from "../containers/PlayerContainer";
import mediaRules from "../layout/mediaRules";
import theme from "../layout/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={{ ...theme, ...mediaRules }}>
        <Switch>
          <Route path="/albums" exact>
            <AlbumsContainer />
          </Route>
          <Route path="/albums/:albumId" >
            <AlbumDetailContainer />
          </Route>
          <Redirect to="/albums" />
        </Switch>
        <PlayerContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
