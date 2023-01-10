# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1:

Title: Add Custom Agent ID to Database
Acceptance Criteria:
A new column called "custom_id" is added to the Agents table in the database.
The custom_id column is able to store a string value of up to 20 characters.
A new endpoint is created in the API to allow Facilities to update an Agent's custom_id

Time/Effort Estimate: 2 hours

Implementation Details:
Use a migration to add the new custom_id column to the Agents table
Update the endpoint for updating an Agent to allow for custom_id to be included in the request body

Ticket 2:

Title: Use Custom Agent ID in Report Generation
Acceptance Criteria:
The generateReport function is updated to use the custom_id for each Agent instead of their internal database id
The custom_id is displayed on the report in the place of the internal database id

Time/Effort Estimate: 1 hour

Implementation Details:
Update the generateReport function to reference the custom_id field instead of the internal database id
Update the report template to display the custom_id instead of the internal database id

Ticket 3:

Title: Add Custom Agent ID validation
Acceptance Criteria:
A validation is added to ensure that when a facility creates or updates an agent, they provide a unique custom_id

Time/Effort Estimate: 0.5 hour

Implementation Details:
When an agent is created or updated, check if the custom_id already exists in the agents table and return an error message if it does.

Ticket 4:

Title: Add Fallback for Missing Custom Agent ID
Acceptance Criteria:
When generating a report, if an agent's custom_id is not set, the internal database id is used as a fallback.
A warning message is displayed on the report if an agent's custom_id is not set.

Time/Effort Estimate: 0.5 hour

Implementation Details:
In the generateReport function, check if the custom_id is set for an agent. If it is not, use the internal database id and display a warning message on the report.

Ticket 5:

Title: Add Custom Agent ID Test Cases
Acceptance Criteria:
Add test cases for the newly created endpoint to update custom_id of an agent,
Validation that a custom_id is unique
Validation that custom_id is used in generating reports
Validation that fallback to internal database id if custom_id is not set

Time/Effort Estimate: 1 hour

Implementation Details:
Add test cases for the endpoint that updates an agent's custom_id, including test for unique validation, successful updating and test for missing fields
Add test cases for generateReport function, including test for using custom_id in the report and fallback to internal database id if custom_id is not set.
Please note that these estimations and details would also depend on complexity of current system and on how this feature will be integrated with the rest of the application which is not provided in the information given.