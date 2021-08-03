import { Redirect, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import AlbumDetailContainer from "../containers/AlbumDetailContainer";
import AlbumsContainer from "../containers/AlbumsContainer";
import PlayerContainer from "../containers/PlyaerContainer";
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
