import { Redirect, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import AlbumDetailContainer from "../containers/AlbumDetailsContainer";
import AlbumsContainer from "../containers/AlbumsContainer";
import PlayerContainer from "../containers/PlayerContainer";
import media from "../layout/media";
import theme from "../layout/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={{ ...theme, ...media }}>
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
