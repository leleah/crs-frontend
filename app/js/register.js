var brownieElementIds = ["new_year_term", "curr_id", "new_title_code", "page_sequence", "curr_credit", "section_type", "section_num"]

function addClass() {
    var brownie = ""
    var prefix = ""
    for( var i=0; i<brownieElementIds.length; i++ ) {
        console.log(brownieElementIds[i])
        var el = document.getElementById(brownieElementIds[i])
        brownie += prefix + el.id + "=" + el.value
        prefix = "&"
    }
    console.log("brownie = "+brownie)
    document.getElementById("brownie").value = brownie
    document.getElementById("invisible").submit()
    console.log("submitted")
}

