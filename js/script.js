/*
-	Protfolio "AlishaBeg"
*/
$(document).ready(function () {

    let dialog = $("#dialog");
    let dialog_title = $("#dialog_title");
    let dialog_description = $("#dialog_description");
    let dialog_content = $("#dialog_content");
        
    dialog.hide();

    /* close button */
    
    $("#close_btn").click(() => {
        
        dialog.fadeOut();
    })
    
    /* contact button function */

    $("#contact_btn").click(function () {
        
        dialog.fadeIn();

        dialog_title.html(`<span class="bi bi-envolope"></span> Contact Form`);
        dialog_description.text(`Please Send message for me if any work.`);
        dialog_content.show();
    })

    /* button onclick  function */
    
    $(document).on('click', 'button', function () {
        
        let element_url = $(this).data('url');

        if (!element_url) {
        
            console.log('data url not found');
            return;
        }

        if (!navigator.onLine) { 
        
            dialog.fadeIn();

            dialog_title.html(`<span class="bi bi-wifi"></span> Network Error`);
            dialog_description.text(`System is (offline) Please check your network`);

            dialog_content.hide();
            
            return;
        }

        window.open(element_url,"_blank",true);
    })

    /* function set parmas data and return card layout */

    function cardLayout (data) {
        return `
            <div class="card relative border border-lime-500 hover:border-lime-600 p-3">
                <h3 class="title text-gray-400 text-lg"> <span class="bi bi-folder"></span> ${data.name} </h3>
                <p class="description py-3 pb-10"> ${data.description} </p>
                <button data-url='${data.url}' class="more_btn absolute bottom-3 right-3 inline-block bg-gray-500 hover:bg-transparent text-gray-900 hover:text-lime-500 border border-transparent hover:border-lime-500 float-end  p-1 px-3" id=""> <span class="bi bi-eye"></span> VIEW </button>
            </div>
        `;
    }

    /* Set data card inside project container */
    
    [
        {
            name: 'Assistant (CLI Application)',
            description: `A Python-based command-line assistant that can speak and fetch system information. Currently under development in collaboration with Mayank.`,
            url: '#'
        },
        {
            name: 'Chat Room Application',
            description: `A Python CLI socket-based server–client chat system with multiple chat rooms. Users can join rooms, send messages in real time, and interact with others.`,
            url: 'https://alishabeg.github.io/room'
        },
        {
            name: 'Login System',
            description: `A PHP-based authentication system with secure database integration. Supports user registration, login, and forget password functionality.`,
            url: 'https://alishabeg.github.io/login'
        }
    ].forEach((element) => {

        $("#project_container").append(cardLayout(element).toString());
    })

});

$(document).ready(async function () {

    async function getInformation() {
        
        let storage = await navigator.storage?.estimate?.() || {};

        return {
            Time: new Date().toLocaleString(),
            "Window Width": window.innerWidth,
            "Window Height": window.innerHeight,
            "Operating System": navigator.oscpu || "N/A",
            "User Platform": navigator.platform,
            "Browser Code Name": navigator.appCodeName,
            "Browser Name": navigator.appName,
            "Browser Version": navigator.appVersion,
            "User Agent": navigator.userAgent,
            "Hardware Concurrency": navigator.hardwareConcurrency,
            "Device Memory (GB)": navigator.deviceMemory || "N/A",
            "Max Touch Points": navigator.maxTouchPoints,
            "Languages": navigator.languages.join(", "),
            "Default Language": navigator.language,
            "Browser Online": navigator.onLine,
            "Cookies Enabled": navigator.cookieEnabled,
            "Do Not Track": navigator.doNotTrack,
            "WebDriver": navigator.webdriver,
            "Java Enabled": navigator.javaEnabled?.() || "N/A",
            "PDF Viewer Enabled": navigator.pdfViewerEnabled || "N/A",
            "Screen Width": screen.width,
            "Screen Height": screen.height,
            "Color Depth": screen.colorDepth,
            "Pixel Depth": screen.pixelDepth,
            "Referrer": document.referrer || "Direct Visit",
            "Current Page URL": document.location.href,
            "Page Title": document.title,
            "Last Modified": document.lastModified,
            "Storage Estimate (MB)": storage.quota 
                ? (storage.quota / (1024*1024)).toFixed(2) 
                : "N/A"
        };
    }

    // store information in a global variable
    window.information = await getInformation();

    // optional: show it immediately in console
    console.table(information);

});