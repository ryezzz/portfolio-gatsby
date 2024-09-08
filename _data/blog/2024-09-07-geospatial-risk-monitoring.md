---
template: BlogPost
path: /portfolio/risk-map
date: 2024-09-07T22:23:12.151Z
title: "Geospatial Risk Monitoring "
metaDescription: Exploring catastrophic risk and events
exploration: false
corporate: true
thumbnail: /assets/1695301565503.jpeg
---
At my current company, an innovative supply chain startup, my team and I developed a geospatial risk exploration experience that enables companies to track and monitor risks within their suppliers. 

**Project Importance:**\
In a time of increased climate-caused catastrophes, this map and associated sub-visualizations provides companies with a way of anticipating potential future disasters that not only have devastating human impact but financial impact for our customers.

**Design, Prototyping and Data Modeling:** \
Having worked a lot with spatial data, I was in the lead designer and visualization engineer on this project and was heavily involved at every stage.

Since this was such an interactive data experience, I prioritized UX research to ensure we gathered accurate customer feedback. I worked with another stellar engineer to build a custom CI/CD demo environment, which allowed me to simultaneously engineer and design the prototype.

I used Maplibre, Mapbox, React, and Typescript for the front end, while I developed a Python script to prepare the data, provided by our fantastic methodology team, for visualization.

**User Research and Production Build:** \
After we tested the prototype on customers and made modifications based on that user research, our engineering team and I used the foundation I built to scale into our production environment. 

In the end we moved away from Mapbox and only used Maplibre for cost and flexibility and moved to Postgres GL to host our map layers and shapes.

![Earthquake](/assets/1695301564683.jpeg "Impact area of Earthquake on Click")

![Wildfire](/assets/1695301564529.jpeg "Wildfire risk and events. Color was reinforced with Iconography for accessibility.")

Not shown:

* All visuals were backed up with a table for accessibility.
* Motion is essential to understanding map context.
* All events clearly showed impact so users were able to get the information they needed quickly.