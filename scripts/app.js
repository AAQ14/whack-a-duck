//grid, place where store can be stored
function init(){
    
    const gridElm = document.querySelector('.grid')
    // const Random = Math.Random(100)
    const cells = []
     let score =0 ;
    // let num =0;
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth

    let duckPosition = 1

    function addDuck(){
        cells[duckPosition].classList.add('duck')
    }

    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }

    function play(){
        setInterval(() => {
            removeDuck()
            duckPosition = Math.floor(Math.random ()* numberOfCells)
            addDuck()
        }, 3000)
    }

    function createGrid(){
        ///for every cell create a div
        //append the cell to our grid
        //doing this instead of writing 100 divs on the html which take more space
        for(let i =0; i<numberOfCells; i++){
            const cell = document.createElement('div')
            gridElm.appendChild(cell)
            //means give the div a class named duck
            // cell.classList.add("duck")
            cell.textContent = i
            cells.push(cell)
            
        }

        console.log(cells)
    }
 

    // function points(){
    //     num = event.target.innerText
    //     console.log(num)
    // }
    // cells.addEventListener('click', (event)=>{
    //      num = event.target.innerText
    //      console.log(num)
    // })

    createGrid()
    play()
    
}
document.addEventListener('DOMContentLoaded', init)