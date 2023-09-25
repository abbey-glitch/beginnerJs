let contentCont = document.getElementById("wrapper")
let note_template = document.createElement('form')
note_template.setAttribute('onclick', 'remAttr()')
note_template.setAttribute('action', "javascript:void()")
note_template.classList.add('formCont')
note_template.innerHTML = `<div id='noteCont'>
                                <h3 id='info'></h3>
                                <fieldset>
                                    <legend>Note App</legend>
                                     <fieldset>
                                    <legend>Title</legend>
                                    <input type="text" id="noteTitle" placeholder="enter a note title">
                                </fieldset>
                                <fieldset>
                                    <legend>Content</legend>
                                    <textarea name="" id="content" cols=30 rows=4 placeholder="enter your text content">
                                    </textarea>
                                </fieldset>
                                <fieldset>
                                     <legend>Author</legend>
                                     <input type="text" id="author" placeholder="name of author">
                                </fieldset>
                                <fieldset>
                                      <button type="submit" id="save">Save</button>
                                      <button type="reset">Reset</button>
                                </fieldset>
                                </fieldset>
                               
                           </div>`

// attach the html template to the stactic docs
contentCont.appendChild(note_template)

// set color on the btn element
let saveBtn = document.querySelector("#save")
saveBtn.setAttribute('id', 'set')
// call a function to save the note once the save btn is clicked
saveBtn.setAttribute('onclick', 'saveNote()')

// create a function that remove an attribute from your static page

function remAttr(){
    if(note_template.hasAttribute('class')){
        note_template.removeAttribute('class')
    }
    note_template.setAttribute('id', 'add') 
}

function saveNote(){
   let note_title = document.getElementById('noteTitle').value.trim()
   let note_content = document.getElementById('content').value.trim()
   let author = document.getElementById('author').value.trim()
   let noteVault = localStorage.getItem('note')
   let appStore = []
   let msg = document.getElementById('info');
   if(noteVault == null || noteVault == undefined){
    //    there is no note in store
       if(note_title.length == 0 || note_content.length == 0 || author.length == 0){
           msg.textContent = 'you need to fill all the field'
           msg.setAttribute('class', 'error')
       }else{
           appStore.push({note_title, note_content, author})
           let feedback = JSON.stringify(appStore)
        //    console.log(feedback)
           localStorage.setItem('note', feedback)
           msg.textContent = 'save success'
           msg.setAttribute('class', 'success')
       }
   }else{
    //  there is note get the note
    old_note = JSON.parse(noteVault)
    old_note.push({note_title, note_content, author})
    localStorage.setItem('note', JSON.stringify(old_note))
    console.log(old_note)
   }
}