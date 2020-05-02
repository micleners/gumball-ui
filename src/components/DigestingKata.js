import React from 'react';
import styles from "./Kata.css"

const DigestingKata = () => {
  return (
    <article id="eea8fa82-6aec-4c0f-9d55-44ded55a67ba" class="page sans">
      <header>
        <h1 class="page-title">Digesting Kata</h1>
      </header>
      <div class="page-body">
        <p id="c496d5e7-ff16-4058-8299-06eb85d14ac6" class="">
          Diving into the Kata seemed straight forward enough from the
          description. Gumball machines need their dispensing data uploaded to a
          backup provider. Technicians will manually take the data from the
          gumball machines and load it through an application to the cloud. The
          bulk of the requirements for this application is to have an interface
          + API for technicians to:
        </p>
        <ul id="a73187d3-6a20-4f4e-a17a-c4a8a263c868" class="bulleted-list">
          <li>Upload data to the cloud</li>
        </ul>
        <ul id="1b671cb8-0b74-4c71-a685-c74f2bc72b2a" class="bulleted-list">
          <li>
            Get a list of the names of files associated with their technician id
          </li>
        </ul>
        <ul id="71d6683c-7889-4e77-857f-e9d1740d4b01" class="bulleted-list">
          <li>Delete an uploaded file</li>
        </ul>
        <h1 id="103c4f1f-68c1-419e-a8e3-8b3149af9286" class="">
          Discovery
        </h1>
        <p id="b6945ade-7e68-4085-8fdf-13ec8a2e9ada" class="">
          Getting the docker containers spun up was easy. However, it appears
          that python 3.8 changed the way multiprocessing works. This
          <code>test_connections.py</code> fail. Restarting the project in 3.7
          seemed to fix this issue. It made me wonder why multiprocessing was
          necessary in the first place.
        </p>
        <p id="d65139fc-ea9d-438a-9580-3c10e45ce751" class="">
          Another discovery was setting up the Flask app to run with the
          <code>
            <a href="http://app.py">app.py</a>
          </code>{' '}
          content in the
          <code>__init.py</code> within the project folder. My research into
          documentation says this model is used &quot;for larger
          applications&quot;. Was it necessary to create the project this way or
          could we have kept it in a simpler format?
        </p>
        <p id="2dc02d4c-a609-4762-a529-d14a74be6d33" class="">
          Getting the <code>create_client.py</code> method was an interesting
          challenge. Getting a simple boto3 S3 client to connect to a public S3
          bucket was not a problem. Adding my credentials to the environment and
          loading them was also pretty straight forward. In the end, it appeared
          that the <code>endpoint_url</code> parameter being the
          <code>S3_ENDPOINT_URL</code> caused the client to not instantiate.
          Deleting that line worked like a charm.
        </p>
        <p id="6d9cebe5-79b4-43c6-b5bc-c7e866a926e0" class="">
          I was also curious why we had to run everything through the app
          config, rather than pull from the environment variables within
          <code>fileshare.py</code>. Perhaps for security purposes? It also was
          cool to see typing in python - although I have had some colleagues
          vahamintly against it. Not sure why it was necessary for a boilerplate
          app to provide for this Kata, but it didn&#x27;t seem to cause issues
          keeping the checks in there.
        </p>
        <h1 id="7a1da15e-1a9c-4eb2-9578-3828ca5f4ce9" class="">
          Questions Arose
        </h1>
        <p id="8a4378c0-a4f0-4fd9-b608-11a765f602f6" class="">
          It was new for me posting files, however, there are lots of examples
          out there on the workflow using Flask to take a POSTed file and send
          it to S3. Also a nice stackoverflow I found showing how to use PostMan
          to test out the endpoint.
        </p>
        <h2 id="75e927cd-8a18-4b98-b7bc-862adcf59b21" class="">
          Q1. What about the data in the file?
        </h2>
        <p id="d02a1ec6-530a-41c2-83cd-febe6d15faee" class="">
          Some questions eventually came up around what was being asked of me.
          From the requirements laid out in the
          <code>tests/features</code> file, it seemed that the scope of this
          Kata was around interfacing with S3, i.e. there were no requirements
          around analyzing or dealing with the data within the file.
          Furthermore, there was no mention of needing to save data to a DB,
          etc.
        </p>
        <p id="44b5b199-0e02-4815-93bd-dbcbac09dd78" class="">
          This was confusing because of the evidence left in the initial
          application:
        </p>
        <ul id="e3264b5d-8fd1-44f3-be3a-b4184cd17ec4" class="bulleted-list">
          <li>
            Mentioning we should use <code>sqlalchemy</code> if we chose to use
            a django app.
          </li>
        </ul>
        <ul id="6cbb0ec3-7588-4805-9aef-e557fc064d00" class="bulleted-list">
          <li>A docker database container setup.</li>
        </ul>
        <ul id="96def814-eb88-4eb2-8891-a37f210d5d19" class="bulleted-list">
          <li>
            An initial
            <a href="http://conftest.py">
              <code>conftest.py</code>
            </a>{' '}
            fixture that saved a sample <code>transactions.txt</code> fixture
            data to the test DB. Additionally, a{' '}
            <code>test_connections.py</code> test around running a query on the
            test DB.
          </li>
        </ul>
        <ul id="e65b67c6-04f3-490e-b476-45a0c30e30be" class="bulleted-list">
          <li>
            Models created in the Flask project indicate some sort of data
            processing in this Kata
          </li>
        </ul>
        <p id="4f18954c-99c9-4cbb-b9d5-c40a8a86d76d" class="">
          To add to the confusion, the <code>transactions.txt</code> seemed to
          contain data from multiple gumball machines. I expected each data file
          to only contain data from a single machine - the machine that the
          technician took the data from.
        </p>
        <h3 id="8e78d44f-55a6-47ee-a54e-eeddbbc2b171" class="">
          <strong>Assumption:</strong>
        </h3>
        <p id="60dc3109-ec0a-44cf-9398-67c4d09cafef" class="">
          We would initially ignore the content of the files in this
          application. We would only worry that the files would be stored into a
          cloud storage provider per the <strong>requirements</strong>.
        </p>
        <h2 id="063a4250-2488-4afa-ba35-3033b1dd0d1d" class="">
          Q2. How to get the technician and gumball machine number?
        </h2>
        <p id="79165422-9181-4c1a-bbb8-b382a3b35708" class="">
          The requirements did not discuss how the technician number and gumball
          machine would be determined.
        </p>
        <h3 id="64e8ed1a-5028-4145-ac86-8830d437950d" class="">
          <strong>Assumption:</strong>
        </h3>
        <p id="86c15e3a-39d7-41b6-b0eb-e6f25705a8f1" class="">
          We would initially allow the technician to input his ID and gumball
          machine as parameters in the upload interface.
        </p>
        <p id="be26606c-7159-49dd-aa15-cc4a7e3f5e36" class="">
          This would be the easiest route to reach MVP and meet the
          requirements. This does not set well with me, because technicians
          could either mess up or perform fraud while uploading data. The ideal
          flow would use AUTH to get the technician id and some method to
          extract the gumball machine number rather than have the technician
          input it.
        </p>
        <h2 id="902573d6-7df6-4009-9b8e-ce2036e6ee9a" class="">
          Q3. What is the format of the file and what is the &quot;id for the
          file&quot;?
        </h2>
        <p id="c5f5aff9-c416-482b-a7d6-d9fcb1b7a9a9" class="">
          In Scenario 1, the file is supposed to be named with the extension
          <code>.zip</code>, however in scenario 3, the extension
          <code>.txt</code>.
        </p>
        <h3 id="5d66cbe6-c874-4248-a7f5-1c4e6e200257" class="">
          <strong>Assumption: </strong>
        </h3>
        <p id="18fa040f-c80d-4777-9999-545c928e6d9f" class="">
          Nothing implies having a zip file or zipping the data anywhere in the
          code or documentation, so I will assume that the data format is a text
          file (<code>.txt</code>).
        </p>
        <p id="bf618d64-959a-455f-bb31-d9bc9a688b5e" class="">
          Scenario 1 indicates &quot;the response will include an id for the
          file&quot;. From what I understand about S3, the object
          <code>Key</code> is the unique identifier. I&#x27;m not sure how to
          assign an ID and the purpose of assigning an ID to each file. It
          doesn&#x27;t even make sense that this would be a DB ID because there
          is no model pertaining to each file itself.
        </p>
        <p id="ba3dd41c-0da8-49c8-99bd-b3aee68f0476" class="">
          <strong>Assumption: </strong>The ID of the the file is the same as the
          filename.
        </p>
      </div>
    </article>
  );
};

export default DigestingKata;
