--- 
layout: page
title: "Projects"
---

## 2022 

-  **SLI for Servicing** The main job of SRE is availabitly of our applications, to do this we need to measure availably. The goal of setting up SLI for our current and future apps with repeatable solutions.
Most of this has been research on what can accomplish latency and error rate goals. The problems come from this are that we need latency by endpoint and need to filter out 3xx and 4xx calls.
The second part is a repeatable solution to this. I built a class that can be implemented by anything we can put in the pipeline or have a push button to get SLI’s. This has been implement on DLS.
-  **Cost savings**  saved hundreds to thousands of dollars on each AWS resource, I have even continued to reduce cost every month since the feature was complete.
I not only saved our accounts money but the entire company by identifying a lack of reserve instances for  the entire company increasing total coverage from 40% to 60%.
These changes took a lot of research to determine if the additional speed or coverage was worth it. 

## 2021

-  **DLS Migration** I facilitated migrating DLS to their own account. This mainly training Brady, Teale, and Yaswanth what it takes to migrate applications and their pipelines.
I personally migrated all RDS and most Dynamodbs and cutover and decommissioned Rocket solutions, workout options, default payments and rocket solutions activity.
I was also responsible for many of the migration strategies including cross account access, and decoupling  services.
-  **Tippy Teams Bot** Created a bot in teams written in python that. It runs a proxy in azure the calls an APIGW that will run a lambda. The app is scalable and functionality is added by adding an endpoint that points to a lambda.
This was probably the hardest app to make with the added difficulty of having two clouds, learning python, and still the only one to create a team’s bot at the company. 
-  **RMS migration** During this migration I set up infrastruct, cutover and decommissioned  several apps including  payments bff, LCIS, RMS, RMS feature environment, RMS web.

## 2020

- **Monitoring POC** This task was to do a proof of concept for dynatrace and datadog where we set it up for our apps and then evaluated dashboards and alerting. 
- **lamdba API to Accelerators** this task was to add frontend and backend to to Accelerators. This was the first time working on the new angular frontend with c# backend.
- **AMP load test** Part of lightyear project apps needed to be load test. AMP being a unique app that runs a monolith needed to be load tested. I did this by running multithreaded python scripts to load test our back end systems.

## 2019

- **class dependency tracker** this task was to address several Tech Incidents when a parent class was updated and the child classes needs to be recompiled in amp. 
This daily task keeps track of these dependencies so engineers can add the proper compile only packet.
- **Improve AMP reliability** I did this by doing several changes. First was I created a script to regular delete loans in non-prod. Seconds create an AMP api that can receive and process alerts coming from third part apps.
Third was to stand up Kapactior in the cloud to read data from influxdb and alert amp at certain thresholds
- **Sonar Qube** For this task I made sure that the daily job of code coverage was highly available and robust. This constantly failed do to bad data and memory issues. I also implemented a gate to warn TM and TL if new code did not meet code coverage
- **Auto scale backend process** There had been several issues with backend process in amp getting bogged down. To fix this I add autoscaling to many backend process and migrated backend jobs to others severes

## 2018

- **AMP Integrations** AMP had many dependencies that would needed us to copy and past from other sources I created three tools. core to integrate with core api to view queue information. 
A class to integrate with cherwell so we can pull change request Ids. lastly, a oncall integration so that alerts can automaticall call or email the right person.
- **AMP Integration with Graphana** I configured the agents and wrote the metrics class to sent metrics to the influxdb. This has been used to fix several TI and tons of dashboards to monitor systems.
- **Failover Automations** Created several tool to make fail over easier this included stopping and restarting services and automating UI validaiton with UI Path.
- **Multiple Users in Loans** For almost 30yrs only 1 person could could make changes in a loan do the high about of exclusive locks. This caused problems for many users but protected loans from being misconfigured. 
I added metrics to determine that allowing multiple users in loans would not cause any incidents. This gave bankers, underwriters, and verifications teams valuable time back to their to make them more efficient.



