const quizData = [
    {
        question: "You are the quality specialist in a mobile application development team. For which of the following would mobile analytics data be used in the test strategy or test plan?",
        a: "To define the expected user base of the application",
        b: "To derive test levels, test cases and test data",
        c: "To select the device portfolio and prioritization for test execution",
        d: "To select the application type and development model to follow",
        correct: "c",
        number: "Question 1"
    },
    {
        question: "Your team is developing a free-use application that collects publicly available news from user selected sources so that the user has a single place to read all the news from his/her favorite sources. Based on this information, which of the following business models is MOST appropriate?",
        a: "Freemium application",
        b: "Advertisement-based application",
        c: "Paid application",
        d: "Transaction-based application",
        correct: "b",
        number: "Question 2"
    },
    {
        question: "Which of the following statements is true for feature phones?",
        a: "Feature phones provide limited support for app installation",
        b: "Feature phones are similar to smart phones but bigger",
        c: "Feature phones are the next generation smartphones, with extended functionality",
        d: "Feature phones have cameras, GPS and other sensors built in",
        correct: "a",
        number: "Question 3"
    },
    {
        question: "Your team develops an Android game utilizing many device features such as camera, GPS and device orientation. Which of the following types of application is MOST suitable, if the precise use of device specific features is essential?",
        a: "Hybrid app",
        b: "Mobile web app",
        c: "Native app",
        d: "Desktop app",
        correct: "c",
        number: "Question 4"
    },
    {
        question: "Your team develops an iOS app that is used to register users, their e-mail and street addresses.The data is transferred to a server and provides registered users with samples of physical products, shipped via normal mail. Which of the following are the MOST appropriate architectural decisions to consider for this app?",
        a: "Always Connected / Cellular data",
        b: "Native app / Store and forward",
        c: "Store and forward",
        d: "Web app",
        correct: "b",
        number: "Question 5"
    },
    {
        question: "Your analytics data shows that all your users use iPhone. Which of the following decisions is MOST appropriate for your test strategy if you have a low risk app?",
        a: "Use remote device access service",
        b: "Use single platform strategy",
        c: "Use maximum coverage strategy",
        d: "Use iOS simulators only",
        correct: "b",
        number: "Question 6"
    },
    {
        question: "Which of the following is NOT a challenge when testing mobile apps?",
        a: "Unknown command parameters for application startup altering the app's behavior",
        b: "Diverse users and user groups",
        c: "Multiple network types and network providers",
        d: "Non-availability of newly launched devices necessitating the use of emulators/simulators",
        correct: "b",
        number: "Question 7"
    },
    {
        question: "A company has decided to use crowd testing. Which of the following risks is mitigated by this decision?",
        a: "Non-availability of important stakeholders during development",
        b: "Cost of supporting multiple platforms",
        c: "Non-availability of important devices during testing ",
        d: "Good reviews in the platform provider's app store",
        correct: "c",
        number: "Question 8"
    },
    {
        question: "When testing a native app using different device features, which of the following hardware devices is LEAST needed to be in focus when performing the tests?",
        a: "WLAN module",
        b: "Integrated speakers",
        c: "Built-in camera",
        d: "Headphone access",
        correct: "a",
        number: "Question 9"
    },
    {
        question: "Which of the following is NOT a potential effect of overheating of a mobile device when testing it?",
        a: "Application becomes slow",
        b: "Features of the application stop working",
        c: "De-installation of the app",
        d: "Incorrect functionality of apps",
        correct: "c",
        number: "Question 10"
    },
    {
        question: "Which of the following statements is NOT a valid scenario for testing a mobile device regarding input sensors?",
        a: "Verifying the quality of the received GPS signal",
        b: "Testing for correct functionality of the gyroscope",
        c: "Validating data provided by the motion sensor",
        d: "Correct screen size in landscape and portrait modes",
        correct: "d",
        number: "Question 11"
    },
    {
        question: "Which of the following options contains tests that ONLY relate to different input methods?",
        a: "Swiping to the next screen, double tapping on a button, scanning a QR code, recording audio",
        b: "Taking a photo with the camera, using a soft keyboard, printing the content of a screen, using GPS coordinates",
        c: "Dragging an object on the screen, opening another application, capturing of images,sending an SMS to a friend",
        d: "Displaying geo location data, performing distance measurements, using a TV remote app, capturing videos from the internet",
        correct: "a",
        number: "Question 12"
    },
    {
        question: "You are working as a mobile tester for a company which is developing a navigation app. One of the requirements is that the app should run in both portrait and landscape modes whilst providing the same features to the user in an accurate way. Which of the following lists the BEST aspects to take into account for verifying correct functionality when switching screen orientation?",
        a: "Motion sensor, security issues, correctness of output data",
        b: "Usability issues, retaining input data, maintenance of current state",
        c: "Various switches in screen orientation, performance issues, user interface features",
        d: "WLAN interrupts, rendering issues in the graphical user interface, loss of entered data",
        correct: "b",
        number: "Question 13"
    },
    {
        question: "You are working as a test manager for a bank which is developing a new release of its online banking software. This software is realized as a web application. During the preparation of suitable tests, you are focusing on the app's fault tolerance according user-initiated interrupts. <br><br>Consider the following test scenarios:<br>i. Displaying low battery warnings <br>ii. Setting mobile devices in standby mode<br>iii. Accepting incoming voice calls<br>iv. Low memory notification<br>v. Setting device in do-not-disturb mode.<br><br>Which would you choose at BEST for this purpose?",
        a: "i - ii - iii",
        b: "i - ii - iv",
        c: "ii - iii - iv",
        d: "ii - iii - v",
        correct: "d",
        number: "Question 14"
    },
    {
        question: "A health insurance company released an updated version of its customer app. The update includes a feature which scans a pharmacy bill and sends it directly to the health insurance company for payment. However, when the customers installed the update, they found that the camera couldn't be invoked to scan the bills. This bug was reported and fixed. Now new tests need to be prepared and executed, and retesting needs to be performed. Which of the following tests will you execute as the MOST IMPORTANT test in the given scenario?",
        a: "Test for performance",
        b: "Test for accessibility",
        c: "Test for access permission",
        d: "Test for installation",
        correct: "c",
        number: "Question 15"
    },
    {
        question: "Your company provides a news massaging app that includes a notification feature for displaying breaking news. The notifications have deep linking to the relevant online news pages. Recently, some users of the app complained about experiencing delays with the display of the news notifications, while at other times, the expected notifications were not displayed at all. The root cause of this defect was identified by the developers and fixed.<br><br>Consider:<br>i. Correct displaying of the notification when the app is in the background<br>ii. Running the application under low battery conditions<br>iii. Testing the performance of the app whilst displaying the notification<br>iv. Performing of usability tests related to the fixed version of the app<br>v. The deep linking to the correct news page of the app In your role as a mobile tester, which functional tests would you undertake in order to validate that the fixed version of the app is correctly working?",
        a: "i - iv - v",
        b: "i - ii - iv",
        c: "i - ii - v",
        d: "ii - iii - iv",
        correct: "c",
        number: "Question 16"
    },
    {
        question: "Your company is developing a new version of a hybrid app for price comparison. This app consists of feature-rich functionalities in quick-access links. As a mobile tester, it is your task to verify the failure-free working of these quick-access links. Which of the following is the BEST approach to take?",
        a: "Verifying the correct behavior of force-touch functionality of an iOS app",
        b: "Assuring the presence of favorite bookmarks in Mobile Chrome on Android OS",
        c: "Verifying that all hardware keys of a mobile device work as expected",
        d: "Using a suitable tool for identifying broken links in the mobile web app",
        correct: "a",
        number: "Question 17"
    },
    {
        question: "You are testing a native iOS app that uses various sensors. Which of the following test types do NOT apply?",
        a: "Performance testing",
        b: "Testing for utilization of device features",
        c: "Cross-browser testing",
        d: "Device compatibility testing",
        correct: "c",
        number: "Question 18"
    },
    {
        question: "Which of the following is a typical test type for testing interoperability with OS versions?",
        a: "Testing for security issues",
        b: "Testing for performance problems",
        c: "Testing for accessibility standards",
        d: "Testing for backward compatibility",
        correct: "d",
        number: "Question 19"
    },
    {
        question: "Which of the following is a PRIMARY test goal when performing tests for co-existence of a system under test (SUT) with other apps on the device?",
        a: "Verifying that the SUT does not harm any user data",
        b: "Identifying existing security issues on the device",
        c: "Assessing usability problems in the SUT",
        d: "Testing if the SUT meets accessibility standards",
        correct: "a",
        number: "Question 20"
    },
    {
        question: "You are developing a test approach for performing connectivity tests on different types of mobile devices. Which of the following should NOT be in scope for this approach?",
        a: "Switching from GSM to flight mode and back to GSM",
        b: "Initiating a payment transaction via NFC",
        c: "Using Bluetooth for pairing with a wearable device",
        d: "Connecting a USB cable with a power supply",
        correct: "d",
        number: "Question 21"
    },
    {
        question: "You are assigned the task of installation testing for an Android application. Which of the following installation tests should NOT be used?",
        a: "Executing App-Installer.exe",
        b: "Install by connecting the device to a PC and running commands for installation",
        c: "Installation from Google Play Beta Program",
        d: "Side-loading by providing",
        correct: "a",
        number: "Question 22"
    },
    {
        question: "Which of the following are potential security issues for mobile apps?",
        a: "Code injection via input fields / Data being transferred unencrypted",
        b: "App not responding after interruption / Rendering issues after changing device orientation",
        c: "Overlap of screen elements on small screens",
        d: "Data being transferred unencrypted",
        correct: "a",
        number: "Question 23"
    },
    {
        question: "Which of the following are you likely to use to carry out a performance test of the time behavior of an app?",
        a: "An instrumented build to get exact chronometric numbers",
        b: "A load generator to observe the server behavior under heavy load",
        c: "Running the app on an emulator/simulator",
        d: "A device and a stopwatch to check the performance of the device",
        correct: "a",
        number: "Question 24"
    },
    {
        question: "You are tasked with carrying out a usability test for a mobile app. Which of the following is a step that you will NOT perform?",
        a: "Ask the manager to order a usability lab session",
        b: "Test the app to check compliance with platforms user interface guidelines",
        c: "Activate the voice-over feature of the device",
        d: "Learn about the look and feel expectations of the platform",
        correct: "c",
        number: "Question 25"
    },
    {
        question: "What does the mnemonic \"CRUD\" stand for in the context of data validation testing?",
        a: "Copy, Rename, Update, Delete",
        b: "Create, Read, Undo, Delete",
        c: "Create, Read, Update, Delete",
        d: "Create, Read, Undo, Deploy",
        correct: "c",
        number: "Question 26"
    },
    {
        question: "You are conducting internationalization testing. While you execute the tests you partly see pseudostrings and partly English strings. Which of the following is the most likely cause?",
        a: "Missing translations",
        b: "Hard-coded English strings",
        c: "Wrong language settings of the device",
        d: "Something went wrong during build",
        correct: "b",
        number: "Question 27"
    },
    {
        question: "Why should accessibility testing be conducted?",
        a: "To determine if the app is usable by users with differing needs",
        b: "Because it is required by the W3C and the platform providers",
        c: "To completely test the application",
        d: "As generic test cases exist that must be executed for every application",
        correct: "a",
        number: "Question 28"
    },
    {
        question: "You are a tester in a team developing a mobile app. Your team has finished the current version of the app and has released it to the application store. Which of the following is your next activity?",
        a: "Archiving testware",
        b: "Post-release testing",
        c: "Application store approval testing",
        d: "Test closure",
        correct: "b",
        number: "Question 29"
    },
    {
        question: "You are a new member in a team which is testing mobile applications. Your team lead asks you to test the app's inputs for a duration of 1 hour, functions for 1 hour, and interrupts for 1 hour, and so on. Which of the following is the team lead applying?",
        a: "Risk-Based Test Management",
        b: "Delegating the responsibility of his job to you",
        c: "Managing Performance Testing",
        d: "Session-Based Test Management",
        correct: "d",
        number: "Question 30"
    },
    {
        question: "Which of the following is an effective method for field testing?",
        a: "Using tours as a kind of exploratory test technique",
        b: "Using an in-house device lab for executing tests on different smartphones",
        c: "Using a cloud-based approach",
        d: "Using a test tool for executing automated tests on mobile browsers",
        correct: "a",
        number: "Question 31"
    },
    {
        question: "Why is it common for mobile app projects to flip the Test Pyramid?",
        a: "Unit tests are much more complicated on mobile apps. As a result, it is convenient to only have a few unit tests",
        b: "Missing tool support for unit and integration testing for mobile apps",
        c: "Mobile apps are always monolithic. As a result, everything can be tested at system level and there is no need to test at lower levels",
        d: "Mobile apps require a lot of manual testing, like usability or field testing",
        correct: "d",
        number: "Question 32"
    },
    {
        question: "Which of the following statements is correct for the development environments used for mobile application development?",
        a: "iOS developers use Visual Studio IDE as their development environment",
        b: "Android developers use the Universal Studio IDE while iOS developers use Xcode as their development environment",
        c: "Android developers use the Xcode IDE as their development environment",
        d: "iOS developers use the Xcode IDE as their development environment",
        correct: "d",
        number: "Question 33"
    },
    {
        question: "Which of the following is NOT a task that can be typically performed by using a software development kit (SDK) for mobile applications?",
        a: "Taking screenshots",
        b: "Designing test cases",
        c: "Pushing random events to the application",
        d: "Creating virtual devices",
        correct: "b",
        number: "Question 34"
    },
    {
        question: "You are assigned as a tester for a mobile app with a client-server architecture. In order to better utilize available equipment, the company decides to use the employee’s PC without the application being connected to a real server, in order to test the basic features in early test stages. Which of the following architectures would you recommend that the developer of the Android app should use in the early test stages of the development to verify the functional suitability of the basic features?",
        a: "Have the server emulator installed on the developer's PC and the simulator of the mobile application installed on a real device",
        b: "Have the simulator of the mobile application installed on one of the Android Virtual Device's (AVD's) device emulators and the server emulator installed on the developer's PC",
        c: "Have the server simulator installed on the developer's PC and the mobile application installed on one of the AVD's device emulators",
        d: "Have the server simulator and the emulated mobile application installed directly on the developer's PC ",
        correct: "c",
        number: "Question 35"
    },
    {
        question: "You are the test manager in a digital banking division at a Fintech company that is upgrading theAndroid-based mobile banking application of a mid-level financial institution. The upgrade incorporates an innovative security mechanism that uses fingerprint and face recognition features for enhanced app security. Which of the following represents the BEST approach to use in order to setup your test lab for this enhancement?",
        a: "Setup a remote test lab in order to test the new innovative mobile banking application on as many types of devices as possible",
        b: "Setup an on premise lab in order to effectively test the new unique device-related features of the innovative mobile banking application",
        c: "Setup a remote test lab in order to test the mobile banking application on many types of different devices and an on premise lab to cover the maximum of possible devices",
        d: "Setup a remote test lab in order to test the new innovative mobile banking application on many types of Android devices from different device manufacturers and save money for the company",
        correct: "b",
        number: "Question 36"
    },
    {
        question: "Which of the following statement does NOT correctly distinguish between the common mobile testing automation approaches?",
        a: "Agent-based testing approach is best used for executing mobile web applications, whereas device-based testing are best used for all types of mobile applications",
        b: "Agent-based testing approach utilizes a string sent by the browser to spoof a particular browser, whereas device-based testing approach has to be executed on a particular mobile gadget",
        c: "Native apps are best tested using the general web application automation tools, whereas mobile apps need specific tools",
        d: "The mode of operation for the agent-based testing approach is to mimic the browser characteristics, whereas that of the device-based testing approach is to operate on the actual browser",
        correct: "c",
        number: "Question 37"
    },
    {
        question: "Which of the following statements is TRUE regarding the scripting methods used in automation of mobile testing?",
        a: "Scripting using object identification is faster than using visual based (OCR/Text recognition), and therefore reduces the overall time needed for test execution",
        b: "Object based scripting is the more reliable method of authoring test automation code because it allows the test framework to match the right mobile application object agnostically to the device under test",
        c: "The scripting method using object identification increases the ongoing maintenance effort when there are frequent software code changes to the app that affect the baseline images",
        d: "Relying on OCR/Text recognition and object learning does not pose a risk to the test automation reliability or robustness",
        correct: "b",
        number: "Question 38"
    },
    {
        question: "Which of the following is NOT a major consideration during the evaluation of mobile automation test tools?",
        a: "The test automation skill set of the testers who will be using the tool",
        b: "Test automation requirements and complexities such as the use of new features such as FaceID, Fingerprint, Chatbots by the app",
        c: "It is important to consider automation requirements and complexities",
        d: "Ability of the test framework to operate independently of other existing tools used in the organization",
        correct: "d",
        number: "Question 39"
    },
    {
        question: "Which of the following statements LEAST supports the use of a remote test lab?",
        a: "Testing during later stages of the app development and which need to run on the full device lab, is best done on a remote device lab",
        b: "A remote device lab will most likely cover a small set of the latest device/OS configurations to allow developers and testers to quickly validate early design stages of the app",
        c: "Remote device labs will ensure sufficient variety of device and OS to enable teams to get a larger variety of test gadgets for their testing",
        d: "Remote labs are better when executing at large-scale because they are typically designed to ensure that stability concerns are in most cases removed from the overall process",
        correct: "b",
        number: "Question 40"
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const questionsNumber = document.getElementById('questionNumber')
const a_text = document.getElementById('a_text')
const a_input = document.getElementById('a')
const b_text = document.getElementById('b_text')
const b_input = document.getElementById('b')
const c_text = document.getElementById('c_text')
const c_input = document.getElementById('c')
const d_text = document.getElementById('d_text')
const d_input = document.getElementById('d')
const submitBtn = document.getElementById('submit')
let scorePercentage = '';

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerHTML = currentQuizData.question
    questionsNumber.innerText = currentQuizData.number
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function hideElements() {
    a_text.classList.add('invisible')
    a_input.classList.add('invisible')
    b_text.classList.add('invisible')
    b_input.classList.add('invisible')
    c_text.classList.add('invisible')
    c_input.classList.add('invisible')
    d_text.classList.add('invisible')
    d_input.classList.add('invisible')
    submitBtn.classList.add('invisible')
}

function percentage(score) {
    scorePercentage =  (100 * score) / quizData.length;
    return scorePercentage;
}


function endResult(scorePercentage) {
    if (scorePercentage < 40.0) {
        return 'You Failed!'
    } else {
        return 'You Passed!'
    }
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            hideElements()
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} (${percentage(score)}%) questions correctly</h2>

            <h2>${endResult()}</h2>

            <button class="btn btn-primary my-3" onclick="location.reload()">Reload</button>
            `
        }
    }
})