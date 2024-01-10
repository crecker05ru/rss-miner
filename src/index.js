import "./styles.scss"

let loadedGame
let start
let intId
let gameState = {
  gamesTable: [],
  userMinesNumber: 10,
  minesInput: null,
  themeButton: null,
  defaultBoardSize: 10,
  playerSteps: 0,
  app: null,
  appBoard: null,
  appBoardSize: null,
  wrapper: null,
  display: null,
  displaySteps: null,
  appMines: null,
  updatedMines: null,
  appCells: null,
  restartButton: null,
  time: new Date(),
  duration: 0,
  timer: start - Date.now(),
  stopTime: null,
  elapsedTime: null,
  isGameEnded: false,
  isWin: false,
  isLose: false,
}

const difficulties = {
  easy: {
    mines: gameState.userMinesNumber,
    boardSize: 10,
  },
  medium: {
    mines: gameState.userMinesNumber,
    boardSize: 15,
  },
  hard: {
    mines: gameState.userMinesNumber,
    boardSize: 25,
  },
}
const minesRange = {
  from: 10,
  to: 99,
}

function userMines(e) {
  if (e.target.value < minesRange.from && e.target.value > minesRange.to) {
    return
  }
  gameState.userMinesNumber = e.target.value
}
function setTheme(themeName) {
  document.body.className = themeName
}

function toggleTheme() {
  if (document.body.className !== "theme-dark") {
    setTheme("theme-dark")
  } else {
    setTheme("theme-light")
  }
}

function createCell(el, x, y, empty, mine, unOpened = true, opened = false) {
  return {
    el,
    position: {
      x,
      y,
    },
    status: {
      unOpened,
      opened,
      flagged: false,
    },
    state: {
      empty,
      mine,
      number: false,
    },
  }
}
function getRandomNumber(range) {
  return Math.floor(Math.random() * range)
}
function getMinesCoordinates(boardSize, numberOfMines, firstCell) {
  const coordinates = []

  while (coordinates.length < numberOfMines) {
    const mineCoordinates = {
      x: getRandomNumber(boardSize),
      y: getRandomNumber(boardSize),
    }
    if (
      !coordinates.some(
        (coordinate) =>
          coordinate.x === mineCoordinates.x &&
          coordinate.y === mineCoordinates.y
      )
    ) {
      if (
        firstCell.position.x !== mineCoordinates.x &&
        firstCell.position.y !== mineCoordinates.y
      )
        coordinates.push(mineCoordinates)
    }
  }

  return coordinates
}

function placeMines(firstCell, appBoardCells, boardSize) {
  const mines = getMinesCoordinates(boardSize, gameState.appMines, firstCell)
  for (let row = 0; row < boardSize; row += 1) {
    for (let col = 0; col < boardSize; col += 1) {
      mines.forEach((mine) => {
        if (row === mine.x && col === mine.y) {
          appBoardCells[row][col].state.mine = true
        }
      })
    }
  }
}

function checkCellsAround(cells, openedCell) {
  const cellsAround = []
  for (
    let row = openedCell.position.x - 1;
    row <= openedCell.position.x + 1;
    row += 1
  ) {
    for (
      let col = openedCell.position.y - 1;
      col <= openedCell.position.y + 1;
      col += 1
    ) {
      const neighbour = cells?.[row]?.[col]
      cellsAround.push(neighbour)
    }
  }
  return cellsAround
}

function countSteps(cell) {
  if (!cell.status.opened && !cell.status.flagged) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  }
}

function countContextSteps(cell) {
  if (!cell.status.opened) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  }
}

function checkMinesCount(cells) {
  const markedCells = cells.reduce(
    (sum, row) =>
      sum + row.filter((cell) => cell.status.flagged === true).length,
    0
  )
  gameState.updatedMines = gameState.appMines - markedCells
  gameState.display.innerText = `Mines left: ${gameState.updatedMines}`
}

function revealCells(cells) {
  for (let row = 0; row < cells.length; row += 1) {
    for (let col = 0; col < cells[row].length; col += 1) {
      const cell = cells[row][col]
      if (cell.status.opened && cell.state.empty) {
        cell.el.classList.add("cell-opened")
      } else if (cell.state.number) {
        cell.el.classList.add("cell-number")
      } else if (cell.status.flagged) {
        cell.el.classList.add("cell-flagged")
      }
      if (gameState.isGameEnded) {
        if (cell.state.mine) {
          cell.el.classList.add("cell-mined")
        }
      }
    }
  }
}
function drawBoard(boardSize) {
  const board = []
  for (let row = 0; row < boardSize; row += 1) {
    const rowArr = []
    for (let cell = 0; cell < boardSize; cell += 1) {
      const cellElement = document.createElement("div")
      cellElement.classList.add("cell", "cell-closed")
      cellElement.dataset.unOpened = "true"
      const cellInstance = createCell(cellElement, row, cell, true, false)
      rowArr.push(cellInstance)
    }
    board.push(rowArr)
  }
  return board
}

function drawEndGameBoard(cells) {
  const board = []
  for (let row = 0; row < cells.length; row += 1) {
    const rowArr = []
    for (let col = 0; col < cells[row].length; col += 1) {
      const cell = cells[row][col]
      const cellElement = document.createElement("div")
      cell.el = cellElement
      cell.el.classList.add("cell")
      if (cell.status.opened && cell.state.empty) {
        cell.el.classList.add("cell-opened")
      }
      if (cell.state.number) {
        cell.el.innerText = cell.number
        cell.el.classList.add("cell-number", `number-${cell.number}`)
      }
      if (cell.status.flagged) {
        cell.el.classList.add("cell-flagged")
      }
      if (gameState.isGameEnded) {
        if (cell.state.mine) {
          cell.el.classList.add("cell-mined")
        }
      }
      rowArr.push(cell)
    }
    board.push(rowArr)
  }
  return board
}

function flagCell(cell) {
  if (!cell.status.opened) {
    if (!cell.status.flagged) {
      cell.status.flagged = true
      cell.el.classList.add("cell-flagged")
    } else {
      cell.status.flagged = false
      cell.el.classList.remove("cell-flagged")
    }
    checkMinesCount(gameState.appCells)
  }
}

function endGame() {
  gameState.appBoard.addEventListener(
    "click",
    (e) => {
      e.stopPropagation()
    },
    true
  )
  gameState.appBoard.addEventListener(
    "contextmenu",
    (e) => {
      e.stopPropagation()
    },
    true
  )
  gameState.isGameEnded = true
  revealCells(gameState.appCells)
}

function caseEnd() {
  let stopTime
  clearInterval(intId)
  if (gameState.stopTime) {
    stopTime = new Date(gameState?.stopTime)
  } else {
    stopTime = new Date()
    gameState.stopTime = stopTime
  }

  const writeTime = new Date(gameState.time)
  gameState.elapsedTime = new Date(stopTime - writeTime).getSeconds()
  if (gameState.isWin) {
    gameState.isGameEnded = true

    gameState.display.innerText = `Hooray! You found all mines in ${gameState.duration} seconds and  ${gameState.playerSteps} moves!`
  } else {
    gameState.isGameEnded = true
    gameState.display.innerText = "BOOM! Game over. Try again"
  }
  const { gamesTable, ...game } = gameState
  pushToTable(gameState.gamesTable, game)
}

function checkWin() {
  const isWin = gameState.appCells.every((row) =>
    row.every(
      (cell) =>
        (cell.status.opened && cell.status.flagged) ||
        cell.status.opened ||
        cell.state.mine
    )
  )
  if (isWin) {
    gameState.isWin = true
    caseEnd()
    endGame()
  }
}

function openCell(cell) {
  if (gameState.playerSteps < 1) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
    cell.status.unOpened = false
    cell.status.opened = true
    cell.el.classList.remove("cell-closed")
    cell.el.classList.add("cell-opened")
    placeMines(cell, gameState.appCells, gameState.appBoardSize)
    return
  }
  if (!cell || !cell.status) {
    return
  }
  if (cell.status.opened) {
    return
  }
  if (cell.status.flagged) {
    return
  }
  if (!cell.status.flagged) {
    cell.status.unOpened = false
    cell.status.opened = true
    cell.el.classList.remove("cell-closed")
    cell.el.classList.add("cell-opened")
    if (cell?.state.mine) {
      cell.el.classList.add("cell-mined")
      caseEnd()
      endGame()
      return
    }
  }

  if (!cell.state.mine) {
    cell.status.unOpened = false
    cell.status.opened = true
    const neigbours = checkCellsAround(gameState.appCells, cell)
    const minesAtNeighbours = neigbours.filter(
      (n) => n?.state.mine === true
    ).length
    if (minesAtNeighbours === 0) {
      neigbours.forEach((n) => openCell(n))
    } else {
      cell.state.number = true
      cell.el.innerText = minesAtNeighbours
      cell.number = minesAtNeighbours
      cell.el.classList.add("cell-number")
      cell.el.classList.add(`number-${minesAtNeighbours}`)
    }
  }
}
function renderAndInsert(cells) {
  cells.forEach((row) => {
    const rowElem = document.createElement("div")
    rowElem.classList.add("row")
    gameState.appBoard.append(rowElem)
    row.forEach((cell) => {
      cell.el.addEventListener("click", () => {
        if (gameState.playerSteps === 0) {
          gameState.time = Date.now()
        }
        if (gameState.playerSteps > 0) {
          countSteps(cell)
        }
        openCell(cell)
        checkWin()

        if (!intId) {
          intId = setInterval(() => {
            gameState.duration = (
              (Date.now() - gameState.time) /
              1000
            ).toFixed()
            gameState.displayTimer.innerText = `Time duration: ${gameState.duration}`
          }, 1000)
        }
      })
      cell.el.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        flagCell(cell)
        if (gameState.playerSteps > 0) {
          countContextSteps(cell)
        }

        checkWin()
      })
      rowElem.append(cell.el)
    })
  })
}

function drawScoreTable(table, parentElement) {
  const colHeaders = ["№", "Mines", "Board size", "Steps", "Time", "Status"]
  const scoreTable = document.createElement("div")
  const scoreTableHead = document.createElement("div")
  scoreTable.classList.add("score-table")
  scoreTableHead.classList.add("score-table__row")
  colHeaders.forEach((head) => {
    const headEl = document.createElement("div")
    headEl.classList.add("score-table__item")
    headEl.innerText = head
    scoreTableHead.append(headEl)
  })
  scoreTable.append(scoreTableHead)
  table.forEach((tab, index) => {
    const row = document.createElement("div")
    row.classList.add("score-table__row")
    const number = document.createElement("div")
    const mines = document.createElement("div")
    const board = document.createElement("div")
    const steps = document.createElement("div")
    const time = document.createElement("div")
    const status = document.createElement("div")
    number.classList.add("score-table__item")
    mines.classList.add("score-table__item")
    board.classList.add("score-table__item")
    steps.classList.add("score-table__item")
    time.classList.add("score-table__item")
    status.classList.add("score-table__item")
    number.innerText = index + 1
    mines.innerText = tab.appMines
    board.innerText = tab.appBoardSize
    steps.innerText = tab.playerSteps
    time.innerText = tab.elapsedTime
    status.innerText = tab.isWin ? "Win" : "Lose"
    row.append(number, mines, board, steps, time, status)
    scoreTable.append(row)
  })
  parentElement.append(scoreTable)
}

function showScoreTable() {
  const table = document.body.querySelector(".score-table")
  table.classList.toggle("score-table_show")
}
function mountApp(size, mines) {
  intId = null
  document.body.classList.add("theme-dark")
  gameState.appBoardSize = size
  gameState.appMines = mines
  gameState.minesInput = document.createElement("input")
  gameState.minesInput.setAttribute('min','10')
  gameState.minesInput.setAttribute('max','90')
  gameState.app = document.createElement("div")
  gameState.wrapper = document.createElement("div")
  if (gameState.gamesTable) {
    drawScoreTable(gameState.gamesTable, gameState.wrapper)
  }

  const appDifficultiesButtonswrapper = document.createElement("div")
  const displayWrapper = document.createElement("div")

  gameState.themeButton = document.createElement("button")
  gameState.showScoreTable = document.createElement("button")
  gameState.themeButton.innerText = "Switch theme"
  gameState.showScoreTable.innerText = "Show table"

  gameState.appBoard = document.createElement("div")
  gameState.display = document.createElement("div")
  gameState.displaySteps = document.createElement("div")
  gameState.displayTimer = document.createElement("div")
  gameState.display.classList.add("display")
  gameState.displaySteps.classList.add("display-steps")
  gameState.displayTimer.classList.add("display-timer")
  gameState.minesInput.classList.add("input")
  gameState.minesInput.setAttribute("type", "number")
  gameState.minesInput.value = gameState.userMinesNumber
  gameState.themeButton.classList.add("button", "button-theme")
  gameState.showScoreTable.classList.add("button", "button-score")
  displayWrapper.classList.add("app__display")
  appDifficultiesButtonswrapper.classList.add("app__buttons")
  gameState.themeButton.addEventListener("click", toggleTheme)
  gameState.minesInput.addEventListener("input", userMines)
  gameState.showScoreTable.addEventListener("click", showScoreTable)
  gameState.display.innerText = `Mines left: ${mines}`
  gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  gameState.displayTimer.innerText = `Time duration: ${gameState.duration}`

  if (gameState.appCells) {
    gameState.appCells = drawEndGameBoard(gameState.appCells)
  } else {
    gameState.appCells = drawBoard(size)
  }

  renderAndInsert(gameState.appCells)
  gameState.restartButton = document.createElement("button")
  gameState.restartButton.innerText = "New game"
  gameState.restartButton.addEventListener("click", () =>
    restartGame(gameState.defaultBoardSize, gameState.userMinesNumber)
  )
  gameState.restartButton.classList.add("button", "button-restart")
  gameState.wrapper.prepend(gameState.restartButton)
  gameState.restartButton.classList.add("show-button")
  gameState.app.classList.add("app")
  gameState.wrapper.classList.add("wrapper")
  gameState.appBoard.classList.add("board")
  appendDifficultiesButtons(appDifficultiesButtonswrapper)
  displayWrapper.append(
    gameState.minesInput,
    gameState.display,
    gameState.displaySteps,
    gameState.displayTimer
  )
  document.body.append(gameState.app)
  gameState.app.append(gameState.wrapper)
  gameState.wrapper.append(
    gameState.themeButton,
    gameState.showScoreTable,
    appDifficultiesButtonswrapper,
    displayWrapper,
    gameState.appBoard
  )
}

function restartGame(boardSize, defaultMines) {
  start = null
  gameState.duration = 0
  clearInterval(intId)
  gameState.playerSteps = 0
  gameState.app.remove()
  gameState.appBoard.remove()
  gameState.appBoardSize = null
  gameState.display.remove()
  gameState.displaySteps.remove()
  gameState.appMines = null
  gameState.updatedMines = null
  gameState.appCells = null
  if (gameState.restartButton) gameState.restartButton.remove()
  gameState.time = new Date()
  gameState.stopTime = null
  gameState.isGameEnded = false
  gameState.isWin = false
  gameState.isLose = false
  mountApp(boardSize, defaultMines)
}

function saveGame() {
  localStorage.setItem("gameState", JSON.stringify(gameState))
}

function pushToTable(table, game) {
  if (table.length > 9) {
    while (table.length > 9) {
      table.pop()
    }
    table.unshift(game)
  } else {
    table.unshift(game)
  }
}
function loadGame() {
  loadedGame = localStorage.getItem("gameState")
  if (loadedGame) {
    const { ...game } = JSON.parse(loadedGame)
    loadedGame = game
  }
}

function choseDifficulty() {
  gameState.defaultBoardSize =
    difficulties[String(this.innerText.toLowerCase())].boardSize
  restartGame(gameState.defaultBoardSize, gameState.userMinesNumber)
}

function appendDifficultiesButtons(parent) {
  for (const [key] of Object.entries(difficulties)) {
    const difButton = document.createElement("button")
    difButton.classList.add("button", "button-difficulty")
    difButton.innerText = String(key).toUpperCase()
    difButton.addEventListener("click", choseDifficulty)
    parent.append(difButton)
  }
}
window.addEventListener("load", () => {
  loadGame()
  if (loadedGame) {
    gameState = loadedGame
    mountApp(gameState.defaultBoardSize, gameState.userMinesNumber)
    if (loadedGame.isGameEnded) {
      caseEnd()
      endGame()
    }
  } else {
    mountApp(gameState.defaultBoardSize, gameState.userMinesNumber)
  }
})
window.addEventListener("beforeunload", () => {
  saveGame()
})
