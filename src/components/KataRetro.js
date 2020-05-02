import React from 'react';
import styles from './Kata.css';

const KataRetro = () => (
  <article id="16dc6dfc-f43b-41a8-aaec-81f19c0face5" class="page sans">
    <header>
      <h1 class="page-title">Kata Result</h1>
    </header>
    <div class="page-body">
      <h2 id="5e4eab54-3302-4519-bd78-f24d18cd0d77" class="">
        Solution
      </h2>
      <p id="2240671f-b5c1-40e5-8c8c-6916386395bd" class="">
        The solution I implemented for Gumball Services Inc involves a Python
        Flask backend. The client was a simple React GUI. The frontend was
        deployed throug Netlify, the backend was deployed through Heroku, and
        AWS S3 was the storage of choice for the uploaded files.
      </p>
      <p id="4ca12f13-5b10-4024-8766-80f78a8725b0" class="">
        Deployed Frontend:
        <a href="https://gsi.micleners.com">https://gsi.micleners.com</a>
      </p>
      <p id="58b17037-8bc3-4e01-905a-c047b1cd9581" class="">
        Deployed Backend:
        <a href="https://gumball-api.herokuapp.com/">
          https://gumball-api.heroku.com
        </a>
      </p>
      <h2 id="40b3a71a-1a91-414c-937e-3113d78d4b33" class="">
        Backend Solution
      </h2>
      <p id="6d8b023a-4b3e-4d91-87e2-9b4cfdede0d4" class="">
        I followed the general form of the scaffolded project provided for this
        kata. I used environment variables to load my AWS credentials to create
        a boto3 S3 client. I had to make minor changes to the fileshare to get
        it to work and I did end up breaking some of the
        <code>functional/test_connections.py</code> tests.
      </p>
      <h3 id="aae4cb33-4d49-4ccf-afb5-859c81d06ef0" class="">
        Tests and Service Structure
      </h3>
      <p id="25e5c16b-c96a-4da4-9188-ba898228c342" class="">
        All of my tests are located with the
        <code>tests/micleners</code> directory. There is some controller unit
        tests in <code>test_api.py</code>, the main one of note is around the
        upload file endpoint. However, most of my testing was of the
        <code>s3_helpers</code> file in <code>s3_helpers_tests.py</code>.
      </p>
      <p id="c60ea45d-71c6-4d94-9fe2-d2fdd2f0eb31" class="">
        As the tests imply, I layered the structure of this application in two
        places. First, <code>__init__.py</code> is where I created my main
        endpoints. The <code>s3_helpers</code> serves somewhat as a service
        layer, doing some logic and calling to S3.
      </p>
      <h3 id="45b9ad1a-e51e-4f37-b4d5-24c969952425" class="">
        Upload File Endpoint
      </h3>
      <p id="1668c587-9d47-4dee-a5a2-6038cbeb9613" class="">
        As described in my <code>Digesting Kata</code> document, I chose to make
        my <code>upload_file</code> endpoint take
        <code>POST</code> requests with three expected parameters form data
        fields:
      </p>
      <ul id="09bf4d28-35cf-44c5-8bea-510448b8ef8c" class="bulleted-list">
        <li>File containing the .txt to be uploaded</li>
      </ul>
      <ul id="221908b0-2da3-4e75-a97a-5a25f4ed92a8" class="bulleted-list">
        <li>Technician ID</li>
      </ul>
      <ul id="f903e7e8-650e-40e9-b3b5-9ec346bf593b" class="bulleted-list">
        <li>Machine ID</li>
      </ul>
      <p id="b0d0f4f6-b773-4143-8234-3fd34c63021c" class="">
        Using these parameters along with the time in <code>US/Central</code>, I
        created the file named as specified in the requirements. This file was
        uploaded to an s3 bucket.
      </p>
      <h3 id="2bd61357-d895-4f9f-8d19-5c3ceb4c3b15" class="">
        Get All Files
      </h3>
      <p id="39d9a5d0-cbcd-4f24-bfca-263538758ca5" class="">
        I chose to make my <code>get_uploads</code> endpoint expect a
        <code>GET</code> request with a query parameter of the
        <code>technician_id</code>. I then called out to S3 for all the files in
        the bucket. I parsed through those and found the ones associated with
        the technician.
      </p>
      <p id="55ee0d16-c2f0-4b43-b265-509d97ff6e7e" class="">
        Upon reflection, this is not a sustainable solution. As the S3 bucket
        content grows in size, we will not want to bring down <em>all</em> the
        files and filter through them. I would implement a solution where I
        could just download the files associated with the technician.
      </p>
      <h3 id="420156d5-d509-4aae-a176-02615a13b30a" class="">
        Deploying Backend
      </h3>
      <p id="c0711c78-acf3-4fa3-9ff2-e839d7077317" class="">
        I spent a few hours trying to deploy my backend solution to
        <code>AWS EC2</code>. Unfortunately, my skills around proxying a server
        with <code>Apache</code> are not that strong. Previously I had
        experience using <code>Gunicorn</code> on <code>Heroku</code> to deploy{' '}
        <code>Django</code> applications, so I chose to use this flow to stand
        up my backend.
      </p>
      <p id="f969bf21-76b0-4730-aba9-d341bcab6789" class="">
        Regarding CORS, I used <code>flask-cors</code> to allow my local and
        deployed frontend origins. To debug my deployed backend servers I used
        <code>PostMan</code>.
      </p>
      <h2 id="d5714436-8139-45be-a9cd-e4ad4591b169" class="">
        Frontend Solution
      </h2>
      <p id="7b2510a0-c412-4120-ab82-634efb1cbc52" class="">
        I love <code>React</code> 😍 It combined with the prospect of an AWS
        data-intensive solution makes this role with Fuse so interesting to me.
      </p>
      <h3 id="4513ba7f-541e-4415-b750-5e6e9afd2499" class="">
        Styling
      </h3>
      <p id="e12dc82a-ce7d-408b-b784-41bfae29cc3d" class="">
        I took to <code>styled-components</code> a while ago as a preferred
        approach to style React applications. Then I discovered
        <code>Rebass</code>. In my full-fledged projects, I usually use a
        combination. For quick apps, I usually just use
        <code>Rebass</code> because of how quick it is to put together layouts
        and apply styles.
      </p>
      <h3 id="f0cbb7f2-9673-45bd-992a-4e73285e9ec7" class="">
        UX
      </h3>
      <p id="b2cef738-09e9-43b7-968a-d302af3feb26" class="">
        I didn&#x27;t have too much time to put bells and whistles on the UX. I
        tried to give some feedback on what the user is supposed to do by
        disabling some buttons when inputs are not complete. I also clear the
        returned file list if you change the Tech ID value. Also, after
        Uploading a file, the search for file automatically runs and the file
        clears out of the upload field.
      </p>
      <h3 id="e04633be-9f58-4398-9d52-98be47b02d85" class="">
        Service
      </h3>
      <p id="1de2b92e-55ef-4d67-b5e5-4648fb3cb6ae" class="">
        My main service file is in <code>src/fetchService.js</code>. It takes in
        the information required to upload a file or to list files. It then
        makes the call out to the API to get the required files. If I was going
        to start testing the frontend this would be the first area of concern
        for me. I would use <code>Jest</code> to test this.
      </p>
      <h3 id="bc436ca7-3ba0-4bc7-92bc-34c7b3cf5a11" class="">
        State Manangement
      </h3>
      <p id="1e9c5224-3e9b-465f-adfd-4a083179511b" class="">
        This is no joke in modern frontend frameworks. I chose for an easy
        solution of passing down <code>useState</code> React hooks. These are
        combinations of a state variable and setter function.
      </p>
      <p id="5c9cc276-a0a5-41e2-8eb5-b33fddee65c5" class="">
        The beauty of the useState React hook is that components rerender when
        the setter is used to assign the state. Also, you can pass the variables
        and setter methods around throughout components. You&#x27;ll see this in{' '}
        <code>App.js</code> where I pass down <code>techId</code>,
        <code>setTechId</code>, etc.
      </p>
      <h3 id="63b80a21-143a-42a2-a361-3e067e54de01" class="">
        Components
      </h3>
      <p id="8bd3ab2f-0df9-41f3-9240-7480dbd69dfc" class="">
        I decided to break out the application into a few form components and a
        list component. If this was going to be a full application I would have
        build out a more robust folder structure. I prefer
        <code>atomic design</code> and making components as reusable as possible
        - while not making it painfully unclear how the components come
        together. It&#x27;s a tough balance to strike.
      </p>
      <h3 id="b1e4d31c-a364-4a6f-8d76-f095a83d7105" class="">
        Deploying the Frontend
      </h3>
      <p id="6b294939-404f-4887-b5fb-e199be5cffb7" class="">
        Netlify is great. It&#x27;s a no brainer for me when deploying frontend
        applications. It&#x27;s super simple and easy to deploy frontend
        applications. It redeploys whenever a push occurs to master, it has
        branch and PR previews, and you can easily setup pipeline variables.
      </p>
      <h2 id="df7cf54a-142e-4a26-a351-abfcbeae409f" class="">
        If I Had More Time
      </h2>
      <ul id="95887c81-fd32-4081-81f6-b3ec38dcd72c" class="bulleted-list">
        <li>Do the 3rd requested endpoint: delete files</li>
      </ul>
      <ul id="5b366798-7709-43ad-a192-26ce56e2b61c" class="bulleted-list">
        <li>Use auth to get the technician ID</li>
      </ul>
      <ul id="17a7b69d-1243-4907-b96a-5b64f3cda036" class="bulleted-list">
        <li>Unit test more on the API and UI</li>
      </ul>
      <ul id="056c92b8-222a-488e-891f-29482279fb6c" class="bulleted-list">
        <li>Acceptance Test the API</li>
      </ul>
      <ul id="bb69a185-3142-4810-bcf3-d67c570d2a42" class="bulleted-list">
        <li>Better UX: improve feedback on UI usage</li>
      </ul>
      <ul id="d94f1fb1-9920-4f70-94d4-d50a713947e2" class="bulleted-list">
        <li>E2E test the deployed app</li>
      </ul>
      <ul id="e963489a-bc64-4c80-a7df-db98162d70a2" class="bulleted-list">
        <li>
          Decide on a data structure and upload text files with useable flat
          data
        </li>
      </ul>
      <ul id="bc7bc037-be0c-4167-bc1a-cfa8ac968b80" class="bulleted-list">
        <li>Use Glue to crawl the S3 files and Athena to query</li>
      </ul>
      <ul id="426a1c06-a4bc-4417-8766-26ae9fd38ab4" class="bulleted-list">
        <li>
          Hook up the website to processed data from crawled and massaged S3
          data
        </li>
      </ul>
      <h2 id="d3497816-ed64-42ad-9756-6b80ff77b9f6" class="">
        Conclusion
      </h2>
      <p id="769d3710-a348-4a01-9670-4bd821105c18" class="">
        This was a great opportunity for me to brush off my python skills and
        work with AWS some more. After working with C# and Azure for a year
        it&#x27;s interesting to return to it. Building a full stack app is a
        great experience, even if it&#x27;s just a small one. As I&#x27;ve said,
        the prospect of working at Cardinal Health&#x27;s Fuse is a solid
        confluence of many of my interests and I hope to get to learn more about
        the opportunity. Thanks for your consideration.
      </p>
    </div>
  </article>
);

export default KataRetro;
