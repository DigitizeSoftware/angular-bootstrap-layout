# angular-bootstrap-layout
Lightweight AngularJS directives for better Bootstrap layout development experience.

The idea behind this project is to create a set of lightweight Angular directives that will help build Bootstrap
layout faster and with less boilerplate. Example:
```html
<!-- Bootstrap layout snippet -->
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12 com-md-4">
        ....
        </div>
    </div>
</div>

<!-- Same layout written with angular-bootstrap-layout directives -->
<container fluid>
  <row>
    <col xs="12" md="4">
      ...
    </col>
  </row>
</container>
```
A more complex example:
```html
<!-- Bootstrap form -->
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group">
    <label for="exampleInputFile">File input</label>
    <input type="file" id="exampleInputFile">
    <p class="help-block">Example block-level help text here.</p>
  </div>
  <div class="checkbox">
    <label>
      <input type="checkbox"> Check me out
    </label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>
</form>

<!-- Same form written with angular-bootsrap-layout -->
<layout-form>
  <form-group label="Email address" type="email" id="exampleInputEmail1" placeholder="Email" />
  <form-group label="Password" type="password" id="exampleInputPassword" placeholder="Password" />
  <form-group label="File input" type="file" id="exampleInputFile" placeholder="Password">
    <p class="help-block">Example block-level help text here.</p>
  </form-group>
  <checkbox label="Check me out">
  <btn submit default>Submit</btn>
</layout-form>
```
