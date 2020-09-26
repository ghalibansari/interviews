
let  input_string = "who is acquired?"; //Give sentence

//Condition
//  is, are, was, were before 3rd form will be passive
//  had been, has been, have been
let verb_3rd_forms = ['acquired', 'acquired?']  //verb 3rd form

input = input_string.split(' ') //created array fron sentence

let status = 'active'   //Default status value

input.forEach((word, index) => {
    word = word.toLocaleLowerCase() //Word converted to lower case before if
    if(word === 'had' || word === 'has' || word === 'have')
    {
        if(input[index+1].toLocaleLowerCase() == 'been'){
            status = 'passive'
        }
    }
    else if(word === 'is' || word === 'are' || word === 'was' || word === 'were'){
        verb_3rd_forms.forEach(verb => {                    //iteration of verb_3rd_forms array
            if(input[index+1].toLocaleLowerCase() == verb){
                status = 'passive'
            }
        })
    }
})

console.log(status)
