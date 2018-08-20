function func() {
    let searchSite = getSelectedValue(document.getElementById("searchSiteSelect"))
    let searchText = getInputTextById("inputSearchId")
    console.log(searchSite)
    console.log(searchText)
    if ((searchText != undefined) && (searchSite != "") && (searchSite != undefined))
        window.location.href = searchSite + searchText;
  }
function getSelectedValue(element) {
    if (element.selectedIndex == -1)
        return null
    let selectedValue = element.options[element.selectedIndex].value
    if (selectedValue == "")
        alert('Indicate the search engine')
    else
        return element.options[element.selectedIndex].value
}
function getInputTextById(elementId) {
    inputText = document.getElementById(elementId).value
    if (inputText == '')
        alert('Enter some text before you search')
    else
        return inputText
}



