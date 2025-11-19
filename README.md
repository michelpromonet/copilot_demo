Links
===

Wiki documentation: https://wiki.corp.gts/display/gtseng/Github+Copilot

Github organization: https://github.com/orgs/GroundTransportationSystems/people

Github compilot feature https://github.com/settings/copilot/features 

Model comparison: https://docs.github.com/en/copilot/reference/ai-models/model-comparison

Demo
===

Working with translation file i18n.json
---
-- Set Ask Mode --  
```
please fix translations  
```
-- Set Edit Mode --  
```
please fix translations  
please add italian and japonese   
```

Working with SVG file example.svg
---
-- Set Edit Mode  --  
```
please group continous characters
please group continous characters keeping space character   
```
-- Set Agent Mode  --  
```
please create a script that group continous characters keeping space character     
please run it   
```

Code completion
---
```
(open a method.ts file and start styping   
// create a method implementing fibbonaci
)
```
npx tsx method.ts

```
please convert in python  
```

Doc in Typescript sae-track-power-section.ts
---
```
please explain this code   
please add doc for methods
(please improve it)
```

Fixing java
---
(project was created with prompt "please create a spring 3 using jdk21 that makes a basic crud using H2 database with a simple html UI", then I broke it :) )  
```
please fix build os java project
```
mvn spring-boot:run  
```
please fix update   
please remove email field and add mobile number   
```
