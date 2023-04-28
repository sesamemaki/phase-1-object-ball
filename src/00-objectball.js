function gameObject() {
  return nbaGame;
}

const nbaGame = {
  home: {
    teamName: "Brooklyn Nets",
    colors: ["Black", "White"],
    players: {
      "Alan Anderson": {
        number: 0,
        shoe: 16,
        points: 22,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1,
      },
      "Reggie Evans": {
        number: 30,
        shoe: 14,
        points: 12,
        rebounds: 12,
        assists: 12,
        steals: 12,
        blocks: 12,
        slamDunks: 7,
      },
      "Brook Lopez": {
        number: 11,
        shoe: 17,
        points: 17,
        rebounds: 19,
        assists: 10,
        steals: 3,
        blocks: 1,
        slamDunks: 15,
      },
      "Mason Plumlee": {
        number: 1,
        shoe: 19,
        points: 26,
        rebounds: 12,
        assists: 6,
        steals: 3,
        blocks: 8,
        slamDunks: 5,
      },
      "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assists: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },

  away: {
    teamName: "Charlotte Hornets",
    colors: ["Turquoise", "Purple"],
    players: {
      "Jeff Adrien": {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assists: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismak Biyombo": {
        number: 0,
        shoe: 18,
        points: 12,
        rebounds: 4,
        assists: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assists: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assists: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Haywood": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assists: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};

function numPointsScored(name) {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    const playerNamesObj = teamObj.players;
    for (const playerNames in playerNamesObj) {
      const playerPoints = playerNamesObj[playerNames].points;
      if (playerNames === name) {
        return playerPoints;
      }
    }
  }
}

console.log(numPointsScored("Ben Gordon"));

function shoeSize(name) {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    const playerNamesObj = teamObj.players;
    for (const playerNames in playerNamesObj) {
      const playerShoeSize = playerNamesObj[playerNames].shoe;
      if (playerNames === name) {
        return playerShoeSize;
      }
    }
  }
}
console.log(shoeSize("Ben Gordon"));

function teamColors(name) {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    const teamColor = teamObj.colors;
    if (teamObj.teamName === name) {
      return teamColor;
    }
    // console.log(teamObj.colors);
  }
}
teamColors("Brooklyn Nets");

function teamNames() {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    return teamObj.teamName;
  }
}
teamNames();

function playerNumbers(name) {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    const playerNamesObj = teamObj.players;
    for (const playerNames in playerNamesObj) {
      const jerseyNumbers = playerNamesObj[playerNames].number;
      if (playerNames === name) {
        return jerseyNumbers;
      }
    }
  }
}
console.log(playerNumbers("Brendan Haywood"));

function playerStats(name) {
  for (const team in nbaGame) {
    const teamObj = nbaGame[team]; //teamObj: home - away
    const playerNamesObj = teamObj.players;
    for (const playerNames in playerNamesObj) {
      const stats = playerNamesObj[playerNames];
      if (playerNames === name) {
        return stats;
      }
    }
  }
}
console.log(playerStats("Brendan Haywood"));

function bigShoeRebounds() {
  let maxShoeSize = 0;
  let playerWithMaxShoeSize = "";

  for (const team in nbaGame) {
    for (const player in nbaGame[team].players) {
      const currentShoeSize = nbaGame[team].players[player].shoe; //all shoe size

      if (currentShoeSize > maxShoeSize) {
        maxShoeSize = currentShoeSize;
        playerWithMaxShoeSize = player;
      }
    }
  }
  // console.log(playerWithMaxShoeSize);
}

bigShoeRebounds();

function mostPointsScored() {
  let maxPoint = 0;
  let playerWithMaxPoint = "";

  for (const team in nbaGame) {
    for (const player in nbaGame[team].players) {
      const currentPoint = nbaGame[team].players[player].points; //all points

      if (currentPoint > maxPoint) {
        maxPoint = currentPoint;
        playerWithMaxPoint = player;
      }
    }
  }
  // console.log(playerWithMaxPoint);
}

mostPointsScored();

function winningTeam() {
  let homeTeamPoint = 0;
  let awayTeamPoint = 0;

  for (const homePlayers in gameObject()["home"]["players"]) {
    const playerPoints = nbaGame["home"].players[homePlayers].points;
    homeTeamPoint += playerPoints;
  }

  for (const awayPlayers in gameObject()["away"]["players"]) {
    const playerPoints = nbaGame["away"].players[awayPlayers].points;
    awayTeamPoint += playerPoints;
  }

  if (homeTeamPoint > awayTeamPoint) {
    return gameObject()["home"].teamName;
  } else gameObject()["away"].teamName;
}

console.log(winningTeam());

function playerWithLongestName() {
  let maxLength = 0;
  let playerNameWithMaxLength = "";

  for (const team in nbaGame) {
    for (const player in nbaGame[team].players) {
      const currentLength = player.length;

      if (currentLength > maxLength) {
        maxLength = currentLength;
        playerNameWithMaxLength = player;
      }
    }
  }
  return playerNameWithMaxLength;
}
console.log(playerWithLongestName());

function mostStealsScored() {
  let maxSteals = 0;
  let playerWithMaxSteals = "";

  for (const team in nbaGame) {
    for (const player in nbaGame[team].players) {
      const currentSteals = nbaGame[team].players[player].steals; //all steals

      if (currentSteals > maxSteals) {
        maxSteals = currentSteals;
        playerWithMaxSteals = player;
      }
    }
  }
  return playerWithMaxSteals;
}
mostStealsScored();

function doesLongNameStealATon() {
  const playerWithTheLongestName = playerWithLongestName();
  const playerWithMaxSteals = mostStealsScored();

  return playerWithTheLongestName === playerWithMaxSteals ? "true" : "false";
}
console.log(doesLongNameStealATon());
