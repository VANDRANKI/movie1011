import React from 'react';
import { Wrapper } from 'styles/variables';
import logo from 'images/tmdb.svg';
import headerLogo from 'images/react-logo.png';
import * as S from './AboutContent.style';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './modal.css';
import { FcLike, FcClapperboard, FcPanorama, FcList } from "react-icons/fc";
import { SiThemoviedatabase } from "react-icons/si";

const AboutContent = () => {
  const overlayStyle = { background: 'rgba(0,0,0,.9)' };
  const contentStyle = { maxWidth: '700px', width: '75%', maxHeight: '500px', height: '50vh' };

  return (
    <section>
      <Wrapper>
        <S.Title><S.MovieLogo />About the Project</S.Title>
        <S.Container>
          <S.Intro>
            This movie website <FcClapperboard /> shows today's movie on the intro screen <FcPanorama /> and this week's recommended movies on a slide.
            The home menu page shows a list <FcList /> of movies with tabs Now Playing, Popular, Top rated and Upcoming.
            After selecting your favorite movie <FcLike />, you can see it in the favorites menu.
            This product uses the TMDb API but is not endorsed or certified by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb <SiThemoviedatabase /></a>.
          </S.Intro>
          {<S.Logo src={logo} alt="lightgreen TMDB logo" />}
          <S.MiddleTitle>What was it developed using?</S.MiddleTitle>
          <S.Intro>
            This movie website was developed using many libraries such as react, react-dom, react-router-dom,
            redux, react-responsive, redux-saga, react-icons and styled components based on JSX and CSS-in-JS(Styled components).
          {/* popup start */}
            <Popup trigger={<button className="button"><span class="btn btn-detail">More Detail</span></button>}
              {...{ overlayStyle, contentStyle }} modal nested>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>&times;</button>
                  <div className="header">Features of the Used Packages</div>
                  <div className="content">
                    {' '}
                    {/* 1. axios */}
                    <span class="title-name">1. axios</span><br /><br />
                    <div class="features-content">
                      <p>- Make XMLHttpRequests from the browser</p><br />
                      <p>- Make http requests from node.js</p><br />
                      <p>- Supports the Promise API</p><br />
                      <p>- Intercept request and response</p><br />
                      <p>- Transform request and response data</p><br />
                      <p>- Cancel requests</p><br />
                      <p>- Automatic transforms for JSON data</p><br />
                      <p>- Client side support for protecting against XSRF</p><br />
                    </div><br /><br />
                    {/* 2. immer */}
                    <span class="title-name">2. immer</span><br /><br />
                    <div class="features-content">
                      <p>- Create the next immutable state tree by simply modifying the current tree</p><br />
                      <p>- The basic idea is that you will apply all your changes to a temporary draftState,
                          which is a proxy of the currentState. </p><br />
                      <p>- Once all your mutations are completed,
                          Immer will produce the nextState based on the mutations to the draft state.</p><br />
                      <p>- This means that you can interact with your data by simply modifying it while
                          keeping all the benefits of immutable data.</p><br />
                    </div><br /><br />
                    {/* 3. medium-zoom */}
                    <span class="title-name">3. medium-zoom</span><br /><br />
                    <div class="features-content">
                      <p>- Responsive-scale on mobile and desktop</p><br />
                      <p>- Performant and lightweight-should be able to reach 60 fps</p><br />
                      <p>- High definition support-load the HD version of your image on zoom</p><br />
                      <p>- Flexibility-apply the zoom to a selection of images</p><br />
                      <p>- Mouse, keyboard and gesture friendly-click anywhere, press a key or scroll away to close the zoom</p><br />
                      <p>- Event handling-trigger events when the zoom enters a new state</p><br />
                      <p>- Customization-set your own margin, background and scroll offset</p><br />
                      <p>- Pluggable-add your own features to the zoom</p><br />
                      <p>- Custom templates-extend the default look to match the UI of your app</p><br />
                    </div><br /><br />
                    {/* 4. prop-types */}
                    <span class="title-name">4. prop-types</span><br /><br />
                    <div class="features-content">
                      <p>- Runtime type checking for React props and similar objects.</p><br />
                    </div><br /><br />
                    {/* 5. react */}
                    <span class="title-name">5. react</span><br /><br />
                    <div class="features-content">
                      <p>- React is a JavaScript library for creating user interfaces.</p><br />
                      <p>- It is typically used together with a React renderer like react-dom for the web,
                          or react-native for the native environments.</p><br />
                    </div><br /><br />
                    {/* 6. react-dom */}
                    <span class="title-name">6. react-dom</span><br /><br />
                    <div class="features-content">
                      <p>- This package serves as the entry point to the DOM and server renderers for React.</p><br />
                      <p>- It is intended to be paired with the generic React package, which is shipped as react to npm.</p><br />
                    </div><br /><br />
                    {/* 7. react-icons */}
                    <span class="title-name">7. react-icons</span><br /><br />
                    <div class="features-content">
                      <p>- Include popular icons in your React projects easily with react-icons,
                          which utilizes ES6 imports that allows you to include only the icons that your project is using.</p><br />
                      <p>- <a class="react-icons" href="https://react-icons.github.io/react-icons/" target="_blank" rel="noopener noreferrer">https://react-icons.github.io/react-icons/</a></p><br />
                    </div><br /><br />
                    {/* 8. react-id-swiper */}
                    <span class="title-name">8. react-id-swiper</span><br /><br />
                    <div class="features-content">
                      <p>- react-id-swiperis a library to useSwiperas a ReactJs component.</p><br />
                      <p>- Swiper is the free and most modern mobile touch slider with hardware
                          accelerated transitions and amazing native behavior.</p><br />
                    </div><br /><br />
                    {/* 9. react-redux */}
                    <span class="title-name">9. react-redux</span><br /><br />
                    <div class="features-content">
                      <p>- React Redux is the official React binding for Redux.</p><br />
                      <p>- It lets your React components read data from a Redux store,
                          and dispatch actions to the store to update data.</p><br />
                    </div><br /><br />
                    {/* 10. redux */}
                    <span class="title-name">10. redux</span><br /><br />
                    <div class="features-content">
                      <p>- Redux is a predictable state container for JavaScript apps.</p><br />
                    </div><br /><br />
                    {/* 11. react-responsive */}
                    <span class="title-name">11. react-responsive</span><br /><br />
                    <div class="features-content">
                      <p>- Media queries in react for responsive design.</p><br />
                    </div><br /><br />
                    {/* 12. react-router */}
                    <span class="title-name">12. react-router</span><br /><br />
                    <div class="features-content">
                      <p>- Declarative routing for React.</p><br />
                    </div><br /><br />
                    {/* 13. react-router-dom */}
                    <span class="title-name">13. react-router-dom</span><br /><br />
                    <div class="features-content">
                      <p>- DOM bindings for React Router.</p><br />
                    </div><br /><br />
                    {/* 14. react-scripts */}
                    <span class="title-name">14. react-scripts</span><br /><br />
                    <div class="features-content">
                      <p>- Configuration and scripts for create react app.</p><br />
                    </div><br /><br />
                    {/* 15. react-star-ratings */}
                    <span class="title-name">15. react-star-ratings</span><br /><br />
                    <div class="features-content">
                      <p>- Customizable React Star Ratings.</p><br />
                      <p>- SVG stars that show aggregate star ratings to the hundreths decimal point.</p><br />
                    </div><br /><br />
                    {/* 16. redux-actions */}
                    <span class="title-name">16. redux-actions</span><br /><br />
                    <div class="features-content">
                      <p>- Flux Standard Action utilities for Redux.</p><br />
                    </div><br /><br />
                    {/* 17. redux-devtools-extension */}
                    <span class="title-name">17. redux-devtools-extension</span><br /><br />
                    <div class="features-content">
                      <p>- Wrappers for Redux DevTools Extension.</p><br />
                    </div><br /><br />
                    {/* 18. mini-create-react-context */}
                    <span class="title-name">18. mini-create-react-context</span><br /><br />
                    <div class="features-content">
                      <p>- (A smaller) Polyfill for the React context API.</p><br />
                      <p>- This package only "ponyfills" the React.createContext API, not other unrelated React 16+ APIs.</p><br />
                    </div><br /><br />
                    {/* 19. redux-saga */}
                    <span class="title-name">19. redux-saga</span><br /><br />
                    <div class="features-content">
                      <p>- redux-saga is a library that aims to make application side effects.
                      (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage,
                          more efficient to execute, easy to test, and better at handling failures.</p><br />
                      <p>- The mental model is that a saga is like a separate thread in your application that's solely responsible for side effects.</p><br />
                      <p>- redux-saga is a redux middleware, which means this thread can be started,
                      paused and cancelled from the main application with normal redux actions,
                          it has access to the full redux application state and it can dispatch redux actions as well.</p><br />
                    </div><br /><br />
                    {/* 20. shortid */}
                    <span class="title-name">20. shortid</span><br /><br />
                    <div class="features-content">
                      <p>- ShortId creates amazingly short non-sequential url-friendly unique ids.</p><br />
                      <p>- Perfect for url shorteners, MongoDB and Redis ids, and any other id users might see.</p><br />
                      <p>- ShortId does not generate cryptographically secure ids,
                          so don't rely on it to make IDs which are impossible to guess.</p><br />
                    </div><br /><br />
                    {/* 21. styled-components */}
                    <span class="title-name">21. styled-components</span><br /><br />
                    <div class="features-content">
                      <p>- Visual primitives for the component age.</p><br />
                      <p>- Use the best bits of ES6 and CSS to style your apps without stress.</p><br />
                    </div><br /><br />
                    {/* 22. styled-normalize */}
                    <span class="title-name">22. styled-normalize</span><br /><br />
                    <div class="features-content">
                      <p>- Normalize.css for styled-components CSS-in-JS library.</p><br />
                      <p>- The original normalize.css is pulled from necolas/normalize.css,
                          and parsed into styled ready format.</p><br />
                      <p>- Package exported normalize and Normalize. Normalize is a component with global styles. normalize is
                          a css-normalize content to interpolate into styled component.</p><br />
                    </div><br /><br />
                    {/* 23. react-scroll-up-button */}
                    <span class="title-name">23. react-scroll-up-button</span><br /><br />
                    <div class="features-content">
                      <p>- React Component for a fixed scroll to top button.</p><br />
                    </div><br /><br />
                    {/* 24. react-simple-tooltip */}
                    <span class="title-name">24. react-simple-tooltip</span><br /><br />
                    <div class="features-content">
                      <p>- A lightweight and simple tooltip component for React.</p><br />
                    </div><br /><br />
                    {/* 25. reactjs-popup */}
                    <span class="title-name">25. reactjs-popup</span><br /><br />
                    <div class="features-content">
                      <p>- A simple react popup component that helps you create simple and complex Modals,
                          tooltips, and Menus for your next React App.</p><br />
                    </div><br /><br />
                    {/* 26. react-flipcard */}
                    <span class="title-name">26. react-flipcard</span><br /><br />
                    <div class="features-content">
                      <p>- React Card Flip is allows you to use the card flipping animation.</p><br />
                    </div><br /><br />
                  </div>
                </div>
              )}
            </Popup></S.Intro>
          {/* popup end */}
          {<S.HeaderLogo src={headerLogo} alt="header hero react logo" />}
        </S.Container>
      </Wrapper>
    </section>
  );
};

export default AboutContent;
