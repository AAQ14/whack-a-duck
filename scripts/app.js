//grid, place where store can be stored
function init(){
    
    const gridElm = document.querySelector('.grid')
    // const Random = Math.Random(100)

    function createGrid(){
        ///for every cell create a div
        //append the cell to our grid
        //doing this instead of writing 100 divs on the html which take more space
        for(let i =0; i<100; i++){
            const cell = document.createElement('div')
            gridElm.appendChild(cell)
            cell.textContent = i
        }
    }

    createGrid()
}
document.addEventListener('DOMContentLoaded', init)