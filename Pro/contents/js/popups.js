export function youWhat(player, emotion, isMode) {
  return `
    <div class="you${
      isMode ? "Win" : "Lose"
    }" test-bg u-flex f-col ali-items-cent big-gap>
        <div class="container">
            <div class="winnieEmotion">${emotion}</div>
            <div class="winnieMessage">
                You ${
                  isMode ? "Win" : "Lose"
                }! <span id="player">${player}</span>
            </div>
        </div>
    </div>
 `;
}

export function youExit(player, emotion) {
  return `
        <div class="sadWinnie test-bg u-flex f-col ali-items-cent big-gap">
            <div class="container">
              <div class="winnieEmotion">${emotion}</div>
              <div class="winnieMessage">${player} don't leave winne</div>
              <div class="userInput">
                <form id="userForm">
                  <button type="submit">Exit</button>
                </form>
              </div>
            </div>
        </div>
    `;
}

export function youWelcome(player = "", emotion1, emotion2) {
  /**
   *emotion1 - the first emotion
   *emotion2 - the second emotion
   */
  return `
    <div class="Welcome">
            <div class="container u-flex f-col ali-items-cent big-gap">
              <div class="winnieEmotion">${emotion1}</div>
              <div class="winnieMessage">
                Welcome to winnie's guessing ${player} 🎮
              </div>
              <div class="userInput">
                <form id="userForm" class="u-flex f-col ali-items-cent small-gap">
                  <label for="player">What is your name ${emotion2}</label>
                  <input
                    type="text"
                    name="playerName"
                    id="playerName"
                    maxlength="12"
                    minlength="5"
                  />
                  <button type="submit">Start</button>
                </form>
              </div>
            </div>
          </div>
    `;
}
