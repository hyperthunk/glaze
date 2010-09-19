Drawing using SVG
------------------

- excellent event handling support (via SVG-DOM access - think jQuery and/or jsLinq)
- native drag & drop and support for animations (esp. nice with the jQuery plugin)
- amenable to XSLT on the client
    - generated from whatever you like really
    - can serve up both "raw model" data and/or specific diagrams
        - diagrams don't have to be stored whole (as SVG for example)
        - can store "layout" and other preferential visualisation settings and combine on client (or server)
- have to build framework from scratch.

- transformations exist to generate SVG from UML
    - http://www.cwu.edu/~gellenbe/docs/xmltouml/xmltechnicalreport.html
    - transforms for individual UML model/diagram types (see the section "Transformation Stylesheets")
        - http://www.jeckle.de/UML2SVG/index.html
    - comprehensive SVG usage examples (including dynamic stuff)
        - http://www.carto.net/papers/svg/samples/#iact
    - implementation white paper
        - http://www.svgopen.org/2008/papers/67-A_Novel_SVG_Application_In_UML_System_Modelling/#d4e100

- links:
    - http://raphaeljs.com/
    - http://keith-wood.name/svg.html (jQuery plugin)

Drawing on the HTML canvas
---------------------------

- event handling support is poor
- bitmap oriented 

- links
    - lines between points
        - http://www.bennadel.com/blog/1867-Drawing-On-The-iPhone-Canvas-With-jQuery-And-ColdFusion.htm
    - converting to images locally
        - http://www.bennadel.com/blog/1872-Using-Base64-Canvas-Data-In-jQuery-To-Create-ColdFusion-Images.htm
