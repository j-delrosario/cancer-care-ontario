## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the front-end in a browser.

The page and the server will reload if you make edits.

Server is running on port 3001 and is hooked into our MongoDB Atlas cluster.\
To see and manage the database you will want to install [MongoDB Compass](https://www.mongodb.com/try/download/compass).
The link to connect Compass to the cluster is mongodb+srv://admin:123@cluster0.hxf94.mongodb.net/test

### `npm run install-dependencies`

Dependencies are separated between client and server-side.
Installs all dependencies in the root, client, and server.

### `npm run test`

Sets up a release server, runs server side tests, then runs client side tests.

## Directory Structure

```
proj-RESTfulfriends/
├── bin/                # any binaries for distribution
├── client/             # all front-end code
└── server/             # all back-end code
```

See README in client and server folders for their respective folder structures.

## Problem

During the last few months many jurisdictions have experienced difficulties presenting healthcare decision makers with up to date and relevant pandemic status information. See Toronto Star,June 1,2020. In the project we will try to adapt the standards adopted in the domain of cancer care to improve the reporting process to public health and thereby facilitate efficient tracking of the state of a pandemic.  

During a pandemic crisis, while people are dying, leaders, scientists, doctors, labs and public health officials must adapt to quickly changing practices of patient surveillance, examination, diagnostics and improved healthcare technology and analysis. It turns out that the information management processes health care providers and public health care agencies use in normal times do not adapt well to times of crisis. See BBC Oct 5, 2020.  

Ontario is divided into 34 public health units and numerous healthcare organizations, all collecting pandemic crisis information in different formats. Additionally, each unit and organization is allowed to change the information captured and reported in an ad hoc manner. How to eliminate this tower of babel is a key challenge to pandemic management.  

Present practices led to a situation where reports had to be manually entered for reporting to centralized public health authorities and healthcare system managers. Several layers of (manual) data abstraction occurs before final statistical metrics could be reliably extracted from the submitted data. Naturally this injected large delays and erroneous data into the reporting system, and eventually to our scientists and leaders for presentation to the public.  

As software engineers, this was frustrating to watch given that we know how some of these problems can be avoided by following basic data management hygiene.  

There are three basic challenges here.  

First, important patient data, like the reports and records created when a patient visits a pandemic clinic, or a lab returns a test result, or a coroner records a death certificate; need to be well structured and described by well designed information schemas.  

Second, the public health and healthcare organizations should be in charge of the schemas describing these structured reports. During the pandemic, no time-critical data should be submitted to the public health and healthcare organizations other than schema-conforming reports.  

Thirdly, during a pandemic crisis, the situation evolves at a pace far higher than regular healthcare. Hence, changes to the schemas describing the structured reports must be carefully managed. This means that before allowing changes public health and healthcare data administrators should make sure that each new version of a structured report schema can be integrated into its database such that statistics summarizing pandemic state can continue to be efficiently and reliably calculated i.e data migration.  

Unfortunately, while at present most electronic medical data are stored securely and reliably, the information therein is not accessible in the ways we need it to be during a pandemic crisis. While there are good arguments that the entire medical establishment should move towards structured, accessible information, it is essential for the relatively small number of key reports during a pandemic.  

It is common for a doctor to order medical images and blood tests, review results, synthesize findings and diagnosis; and then dictate (audio) a report/note which includes facts and numbers, details of what was observed and done, and next steps for treatment. Before such a clinical note/report can be used (by people, let alone health care managers or machine learning systems) natural language processing or human abstraction is required to recover information that was available at the time the note/report was produced. Often information may be missing, or misrepresented. For example, imagine that the word “no” is dropped from the transcription of the phrase "The patient has no evidence of a tumor". It doesn’t really matter whether the typo was made by a person transcribing the audio or an AI due to a NL understanding mistake. The problem is that the structure of the information has been lost in dictation and is challenging to recover.  

In this environment it is difficult to retrospectively study medical reports and records to evaluate the efficacy of treatments. In a complex space such as the treatment of cancer it is essential to re-examine treatments whereby patients lived or died to determine best practices. These results are crucially important -- but less time pressure exists (compared to a pandemic), so historical records can be manually abstracted and harvested to common forms and statistics and machine learning applied. If this process takes a year it doesn’t matter very much.  

Ontario Health (Cancer Care Ontario) is working towards expanding a system whereby clinicians would fill out structured forms specific to the procedures the patient undergoes. This system exists today in Ontario pathology labs, for cancer lab specimen reporting, See Synoptic Pathology Reporting and ePath The motivation was initially to make the resulting reports standardized, more complete and easier to study. It is anticipated the structured report data will also be more amenable to machine learning.  

Several medical specialties have already proposed standards for structured data to be recorded following many types of patient interaction. For instance radiology and pathology organizations have proposed Structured Data Capture (SDC), a set of XML data structures that clinicians can use to describe various imaging procedures and, in some cases, the structures for the reports clinicians should create when reading (interpreting) the images.

It turns out that relatively simple structured “forms” can capture the information needed for many “structured” clinical notes. This use of “form” is a confusing jargon for software people. You should think of it as a structured questionnaire.  

Typically the forms contain only a few types of questions and the logical structure of the forms is simple. A form is a tree wherein some nodes are decision points where a “yes” answer (Is patient male or female? older than 50?) will lead the form down one leg of the tree whereas a “no” will go down another leg. Most nodes are leaves representing questions of only a few types (multiple choice, checkbox etc).  

Trees as above are easily described by XML documents, hence various health organizations have proposed an XML Data Type Definition (DTD) that describes the general structure of any form. Specific XML documents conforming to such a DTD will thus describe a specific form to collect the structured clinical note for a given clinical interaction.  

Integrating the Healthcare Enterprise (IHE) Structured Data Capture (SDC) is based on such an XML based format. Using SDC we can improve data quality by providing highly structured and coded data while enabling increased interoperability between various domains and even systems used within one hospital and/or over multiple organizations. SDC is currently used by the College of American Pathologists, Cancer Care Ontario, Center for Disease Control and Prevention, California Cancer Registry, and a variety of reporting vendors. The American College of Radiology and the Cancer-Interoperability Initiative are currently exploring how SDC can be used to meet their needs and interoperate with their current technologies. For these reasons IHE SDC has been chosen by the aforementioned organizations and is proposed as the document content format for describing clinical notes in the future.  

## Solution

This year we will try to adapt the standards accepted by the aforementioned organizations to the reports collected by the public health office. The goal is to show a way to improve the efficiency of information management and the efficiency of tracking the state of a pandemic crisis.  

This project creates endpoints that serve two principal APIs.

1. In support of a pandemic crisis clinician’s reporting user interface. Example routes will be those that return the appropriate SDC document for a given clinical procedure, for instance the assessment of a patient presenting with pandemic-like symptoms, or a lab test, or coroner’s report and use it to render a user interface for the corresponding form. The crux will probably be the creation of web components that will dynamically create the user interface for a particular form from the SDC document that describes it. Your user interface will step the clinician through the form/questionnaire corresponding to the clinical procedure, producing a structured report. The structured report will be a json object that relates the specific questions in the form to the clinician’s answers to the question. The resulting data should then be inserted into the patient’s clinical record. During a pandemic crisis, the structured data would be sent to the public health and healthcare authorities as well.  

2. In support of the public health data administrator. Example routes will allow public health data administrators to update the SDC XML describing the structured report for a clinical procedure.  

By way of example: In normal times, the information or test “panels” submitted by a lab for most regular blood tests does not change very frequently, changes are methodical and take months and years to propagate through the health system. In contrast, during the COVID-19 pandemic crisis, the information gathered and analyzed was and is changing constantly as new tests are deployed, and existing tests are improved, and new trends and additional information arise. If labs simply change the information they report to public health as their technology evolves it may make it hard for health officials to combine data from old and new tests. A more methodical approach is needed whereby changes to the structure of a lab test results are permitted only after a public health data manager approves and increments the version number of the schema. Public health managers should be in control of the schemas of the reports.  

For the purposes of the project, when a structured report is submitted, the doctor ordering the test, the local public health office, and the provincial healthcare system should be sent a link corresponding to the structured report. When they follow the link, they see a rendering of the report which includes only the fields of the appropriate version of the report. The report should be immutable after the link is published. (By immutable we mean that if a mistake is discovered, and the structured report must be changed, the changes can only be published by a fresh link to the modified information.) In this project, the structured report is rendered from the information in our prototype structured EMR.

For this project, we prototype our own structured EMR capable of storing these structured reports indexed by, say, the patient’s OHIP number. Referring back to our lab example, the patient’s family doctor would then be sent a resource locator (link) to our prototype EMR which returns the structured report corresponding to the lab report.  

There exists an endpoint for our structured EMR prototype that retrieves structured clinical notes as jsons and a family doctor UI that renders them.  

The authentication, authorization and advanced query capabilities of the structured EMR are beyond the scope of this project (other than the queries needed to test it).  