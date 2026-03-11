import React from "react";

// ═══════════════════════════════════════════════════
// javascript:S5254 — HTML elements should have a valid language attribute
// ════════════════════════════════════════════════════
export const InvalidLang = () => (
  <html lang="xx">
    <body>Invalid ISO 639-1 language code</body>
  </html>
);

// ═══════════════════════════════════════════════════
// javascript:S6821 — DOM elements with ARIA roles should have a valid non-abstract role
// ════════════════════════════════════════════════════
export const AbstractRole = () => (
  <div role="command">Uses abstract ARIA role "command"</div>
);

// ═══════════════════════════════════════════════════
// javascript:S6822 — No redundant ARIA role
// ════════════════════════════════════════════════════
export const RedundantRole = () => (
  <div>
    <button role="button">Redundant role=button on button</button>
    <nav role="navigation">Redundant role=navigation on nav</nav>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6823 — DOM elements with the aria-activedescendant property should be accessible via the tab key
// ════════════════════════════════════════════════════
export const ActiveDescendantNoTabIndex = () => (
  <div aria-activedescendant="option-1" role="listbox">
    <div id="option-1">Option 1</div>
    <div id="option-2">Option 2</div>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6807 — DOM elements with ARIA roles should have the required properties
// ════════════════════════════════════════════════════
export const RoleMissingRequired = () => (
  <div>
    {/* role=checkbox requires aria-checked */}
    <div role="checkbox">Checkbox without aria-checked</div>
    {/* role=combobox requires aria-expanded */}
    <div role="combobox">Combobox without aria-expanded</div>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6824 — No ARIA role or property for unsupported DOM elements
// (meta, title, head and other invisible elements do not support ARIA)
// ════════════════════════════════════════════════════
export const UnsupportedAriaOnElement = () => (
  <head>
    <title aria-hidden="true">Page title with unsupported aria-hidden</title>
    <meta name="author" aria-label="Author metadata" content="Someone" />
  </head>
);

// ═══════════════════════════════════════════════════
// javascript:S6825 — Focusable elements should not have "aria-hidden" attribute
// ════════════════════════════════════════════════════
export const FocusableAriaHidden = () => (
  <div>
    <a href="/page" aria-hidden="true">Focusable link hidden from screen reader</a>
    <button aria-hidden="true">Focusable button hidden from screen reader</button>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6827 — Anchors should contain accessible content
// ════════════════════════════════════════════════════
export const EmptyAnchors = () => (
  <div>
    <a href="/page1"></a>
    <a href="/page2">   </a>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6811 — DOM elements with ARIA role should only have supported properties
// ════════════════════════════════════════════════════
export const UnsupportedRoleProperty = () => (
  <div>
    {/* aria-required is not supported for role="img" */}
    <div role="img" aria-required={true}>Image div with unsupported property</div>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6819 — Prefer tag over ARIA role
// ════════════════════════════════════════════════════
export const PreferNativeTag = () => (
  <div>
    <div role="button" onClick={() => {}}>Should be a button element</div>
    <div role="heading" aria-level={1}>Should be an h1 element</div>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6843 — Interactive DOM elements should not have non-interactive ARIA roles
// ════════════════════════════════════════════════════
export const InteractiveWithNonInteractiveRole = () => (
  <div>
    <button role="presentation">Button with role=presentation</button>
    <a href="/page" role="none">Link with role=none</a>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6844 — Anchor tags should not be used as buttons
// ════════════════════════════════════════════════════
export const AnchorAsButton = () => (
  <div>
    <a href="#" onClick={() => alert("clicked")}>Anchor used as button</a>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6845 — Non-interactive DOM elements should not have the tabIndex property
// ════════════════════════════════════════════════════
export const NonInteractiveTabIndex = () => (
  <div>
    <p tabIndex={0}>Paragraph with tabindex</p>
    <article tabIndex={0}>Article with tabindex</article>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6840 — DOM elements should use the "autocomplete" attribute correctly
// ════════════════════════════════════════════════════
export const InvalidAutocomplete = () => (
  <form>
    <input type="text" name="fullname" autoComplete="full-name-invalid" />
    <input type="email" name="email" autoComplete="email-address-wrong" />
    <button type="submit">Submit</button>
  </form>
);

// ═══════════════════════════════════════════════════
// javascript:S6841 — "tabIndex" values should be 0 or -1
// ════════════════════════════════════════════════════
export const HighTabIndex = () => (
  <div>
    <div tabIndex={2}>tabIndex 2 disrupts natural tab order</div>
    <button tabIndex={5}>tabIndex 5 disrupts natural tab order</button>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6842 — Non-interactive DOM elements should not have interactive ARIA roles
// ════════════════════════════════════════════════════
export const NonInteractiveWithInteractiveRole = () => (
  <div>
    <div role="button">Div with role=button</div>
    <span role="link">Span with role=link</span>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6846 — DOM elements should not use the "accesskey" property
// ════════════════════════════════════════════════════
export const AccessKeyUsage = () => (
  <div>
    <a href="/home" accessKey="h">Home (accesskey h)</a>
    <button accessKey="s">Save (accesskey s)</button>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6847 — Non-interactive elements shouldn't have event handlers
// ════════════════════════════════════════════════════
export const NonInteractiveEventHandler = () => (
  <div>
    <li onKeyDown={() => {}}>List item with keydown handler</li>
    <span onKeyPress={() => {}}>Span with keypress handler</span>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6848 — Non-interactive DOM elements should not have an interactive handler
// ════════════════════════════════════════════════════
export const NonInteractiveClickHandler = () => (
  <div>
    <div onClick={() => {}}>Div with click handler</div>
    <section onClick={() => {}}>Section with click handler</section>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6850 — Heading elements should have accessible content
// ════════════════════════════════════════════════════
export const EmptyHeadings = () => (
  <div>
    <h1></h1>
    <h2>   </h2>
    <h3><span aria-hidden="true">Only hidden content</span></h3>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6851 — Images should have a non-redundant alternate description
// ════════════════════════════════════════════════════
export const RedundantAltText = () => (
  <div>
    <p>Cat photo: <img src="cat.jpg" alt="Cat photo" /></p>
    <p>Dog image <img src="dog.png" alt="Dog image" /></p>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6852 — Elements with an interactive role should support focus
// ════════════════════════════════════════════════════
export const InteractiveRoleNotFocusable = () => (
  <div>
    <p role="button">Paragraph with button role — not focusable</p>
    <span role="link">Span with link role — not focusable</span>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6853 — Label elements should have a text label and an associated control
// ════════════════════════════════════════════════════
export const BadLabels = () => (
  <form>
    <label></label>
    <label htmlFor="nonexistent">Orphaned label</label>
    <input type="text" id="unlabeled-field" />
  </form>
);

// ═══════════════════════════════════════════════════
// javascript:S4084 — Media elements should have captions
// ════════════════════════════════════════════════════
export const MediaNoCaptions = () => (
  <div>
    <video controls>
      <source src="lecture.mp4" type="video/mp4" />
    </video>
    <audio controls>
      <source src="podcast.mp3" type="audio/mpeg" />
    </audio>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S1090 — iFrames must have a title
// ════════════════════════════════════════════════════
export const IframeNoTitle = () => (
  <div>
    <iframe src="widget.html" width="300" height="200"></iframe>
    <iframe src="map.html"></iframe>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S6793 — ARIA properties in DOM elements should have valid values
// ════════════════════════════════════════════════════
export const InvalidAriaValues = () => (
  <div>
    <span aria-hidden="ok">Invalid aria-hidden value</span>
    <div aria-checked="yes">Invalid aria-checked value</div>
    <button aria-expanded="maybe">Invalid aria-expanded value</button>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S1077 — Image, area, button with image and object elements should have an alternative text
// ════════════════════════════════════════════════════
export const ImagesNoAlt = () => (
  <div>
    <img src="photo.jpg" />
    <img src="logo.png" />
    <input type="image" src="submit-btn.png" />
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S1082 — Mouse events should have corresponding keyboard events
// ════════════════════════════════════════════════════
export const MouseEventNoKeyboard = () => (
  <div>
    <div onMouseOver={() => {}}>Hover-only content (no onFocus)</div>
    <span onMouseOut={() => {}}>Mouse-out only (no onBlur)</span>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S5257 — HTML "<table>" should not be used for layout purposes
// ════════════════════════════════════════════════════
export const LayoutTable = () => (
  <table role="presentation">
    <tbody>
      <tr>
        <td>Logo area</td>
        <td>Navigation area</td>
        <td>Search area</td>
      </tr>
    </tbody>
  </table>
);

// ═══════════════════════════════════════════════════
// javascript:S5260 — Table cells should reference their headers
// (td headers attribute references IDs that don't belong to headers in same row/column)
// ════════════════════════════════════════════════════
export const TableCellsWrongHeaders = () => (
  <table>
    <caption>JavaScript Employee Directory</caption>
    <thead>
      <tr>
        <th id="js-col-name">Name</th>
        <th id="js-col-age">Age</th>
        <th id="js-col-city">City</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* headers attribute points to non-existent IDs */}
        <td headers="js-col-country js-col-unknown">Alice</td>
        <td headers="js-col-zip js-col-unknown">28</td>
        <td headers="js-col-region js-col-unknown">Engineering</td>
      </tr>
    </tbody>
  </table>
);

// ═══════════════════════════════════════════════════
// javascript:S5264 — "<object>" tags should provide an alternative content
// ════════════════════════════════════════════════════
export const ObjectNoFallback = () => (
  <div>
    <object data="animation.swf" type="application/x-shockwave-flash" width="300" height="200">
    </object>
  </div>
);

// ═══════════════════════════════════════════════════
// javascript:S5256 — Tables should have headers
// ════════════════════════════════════════════════════
export const TableNoHeaders = () => (
  <table>
    <tbody>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
      </tr>
      <tr>
        <td>Alice</td>
        <td>Brown</td>
        <td>alice@example.com</td>
      </tr>
    </tbody>
  </table>
);

export default function App() {
  return (
    <div>
      <AbstractRole />
      <RedundantRole />
      <ActiveDescendantNoTabIndex />
      <RoleMissingRequired />
      <UnsupportedAriaOnElement />
      <FocusableAriaHidden />
      <EmptyAnchors />
      <UnsupportedRoleProperty />
      <PreferNativeTag />
      <InteractiveWithNonInteractiveRole />
      <AnchorAsButton />
      <NonInteractiveTabIndex />
      <InvalidAutocomplete />
      <HighTabIndex />
      <NonInteractiveWithInteractiveRole />
      <AccessKeyUsage />
      <NonInteractiveEventHandler />
      <NonInteractiveClickHandler />
      <EmptyHeadings />
      <RedundantAltText />
      <InteractiveRoleNotFocusable />
      <BadLabels />
      <MediaNoCaptions />
      <IframeNoTitle />
      <InvalidAriaValues />
      <ImagesNoAlt />
      <MouseEventNoKeyboard />
      <LayoutTable />
      <TableCellsWrongHeaders />
      <ObjectNoFallback />
      <TableNoHeaders />
    </div>
  );
}
