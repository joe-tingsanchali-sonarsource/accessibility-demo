<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JSP Accessibility Issues</title>
</head>
<body>

  <!-- Web:FieldsetWithoutLegendCheck — fieldset without legend -->
  <fieldset>
    Street: <input type="text"><br>
    Town: <input type="text"><br>
  </fieldset>

  <!-- Web:InputWithoutLabelCheck — unlabeled form inputs -->
  <input type="text" name="username">
  <input type="email" name="email">
  <select name="country">
    <option value="us">United States</option>
    <option value="ca">Canada</option>
  </select>
  <textarea name="comments"></textarea>

  <!-- Web:LinksIdenticalTextsDifferentTargetsCheck — same text, different href -->
  <a href="article-one.html">Read more</a>
  <a href="article-two.html">Read more</a>
  <a href="article-three.html">Read more</a>

  <!-- Web:LinkToImageCheck — direct link to image file -->
  <a href="photo.jpg">View photo</a>
  <a href="banner.png">See banner</a>

  <!-- Web:NonConsecutiveHeadingCheck — skip from h2 to h4 (no h1/h3) -->
  <h2>Main Section</h2>
  <h4>Skipped h3 and went to h4</h4>

  <!-- Web:S7929 — audio/video autoplay -->
  <video autoplay src="welcome.mp4"></video>
  <audio autoplay controls>
    <source src="background.mp3" type="audio/mpeg">
  </audio>

  <!-- Web:ServerSideImageMapsCheck — server-side image map -->
  <a href="click_on_world_map.php" target="_self">
    <img src="world_map.png" ismap alt="World map">
  </a>

  <!-- Web:TableHeaderHasIdOrScopeCheck — tbody th without scope, thead th has scope -->
  <!-- This pattern matches exactly how the rule fires in real-world JSP code -->
  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Full Name</th>
        <th scope="col">Gender</th>
        <th scope="col">Age</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <!-- This th is a row header WITHOUT scope — triggers Web:TableHeaderHasIdOrScopeCheck -->
        <th>Alice Johnson</th>
        <td>Female</td>
        <td>28</td>
        <td>alice@example.com</td>
        <td>555-1234</td>
      </tr>
      <tr>
        <th>Bob Smith</th>
        <td>Male</td>
        <td>35</td>
        <td>bob@example.com</td>
        <td>555-5678</td>
      </tr>
      <tr>
        <th>Carol White</th>
        <td>Female</td>
        <td>42</td>
        <td>carol@example.com</td>
        <td>555-9012</td>
      </tr>
    </tbody>
  </table>

  <!-- Web:TableWithoutCaptionCheck — table without caption/description -->
  <table>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
    </tr>
    <tr>
      <td>Bob Smith</td>
      <td>bob@example.com</td>
    </tr>
  </table>

  <!-- Web:WmodeIsWindowCheck — Flash wmode not set to window -->
  <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="550" height="400">
    <param name="movie" value="movie_name.swf">
    <param name="wmode" value="direct">
  </object>

  <embed src="movie_name.swf"
         width="550"
         height="400"
         wmode="direct"
         type="application/x-shockwave-flash"
         pluginspage="http://www.macromedia.com/go/getflashplayer">

</body>
</html>
