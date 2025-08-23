/*
-	Protfolio "AlishaBeg"
*/
$(document).ready(function () {

    let dialog = $("#dialog")
    let dialog_title = $("#dialog_title")
    let dialog_description = $("#dialog_description")
    let dialog_content = $("#dialog_content")
        
    dialog.hide()
    
    $("#close_btn").click(() => {
        
        dialog.fadeOut()
    })
    
    $("#contact_btn").click(function () {
        
        dialog.fadeIn()

        dialog_title.html(`<span class="bi bi-envolope"></span> Contact Form`)
        dialog_description.text(`Please Send message for me if any work.`)
        dialog_content.show()
    })
    
    $(document).on('click', 'button', function () {
        
        let element_url = $(this).data('url')

        if (!element_url) {
        
            console.log('data url not found')
            return
        }

        if (!navigator.onLine) { 
        
            dialog.fadeIn()

            dialog_title.html(`<span class="bi bi-wifi"></span> Network Error`)
            dialog_description.text(`System is (offline) Please check your network`)

            dialog_content.hide()
            
            return
        }

        window.open(element_url,"_blank",true)
    })

    /* function set parmas data and return card layout */

    function cardLayout (data) {
        return `
            <div class="card border border-lime-500 hover:border-lime-600 p-3">
                <h3 class="title text-gray-400 text-lg"> <span class="bi bi-folder"></span> ${data.name} </h3>
                <p class="description py-3"> ${data.description} </p>
                <button data-url='${data.url}' class="more_btn abaolute bottom-0 inline-block bg-gray-500 hover:bg-transparent text-gray-900 hover:text-lime-500 border border-transparent hover:border-lime-500 float-end  p-1 px-3" id=""> <span class="bi bi-eye"></span> VIEW </button>
            </div>
        `
    }

    /* Set data card inside project container */
    
    [
        {
            name: 'PROJECT NAME',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, illo sapiente. Consequuntur dignissimos veritatis provident ratione molestiae similique quae adipisci!',
            url: '#'
        },
        {
            name: 'PROJECT NAME',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, illo sapiente. Consequuntur dignissimos veritatis provident ratione molestiae similique quae adipisci!',
            url: '#'
        },
        {
            name: 'PROJECT NAME',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, illo sapiente. Consequuntur dignissimos veritatis provident ratione molestiae similique quae adipisci!',
            url: '#'
        }
    ].forEach((element) => {

        $("#project_container").append(cardLayout(element).toString())
    })

})