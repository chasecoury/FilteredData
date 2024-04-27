let clubs = [
    {
      name: "Manchester City",
      champion: "1",
      country: "England",
    },

    {
      name: "Real Madrid",
      champion: "14",
      country: "Spain",
    },

    {
      name: "Inter Milan",
      champion: "3",
      country: "Italy",
    },

    {
      name: "Bayer Leverkusen",
      champion: "0",
      country: "Germany",
    },

    {
      name: "Paris Saint-Germain",
      champion: "0",
      country: "France",
    },

    {
      name: "Liverpool FC",
      champion: "6",
      country: "England",
    },

    {
      name: "Arsenal",
      champion: "0",
      country: "England",
    },

    {
      name: "Bayer Munchen",
      champion: "6",
      country: "Germany",
    },

    {
      name: "Borussia Dortmund",
      champion: "1",
      country: "Germany",
    },

    {
      name: "Barcelona",
      champion: "5",
      country: "Spain",
    },

    {
      name: "RB Leipzig",
      champion: "0",
      country: "Germany",
    },

    {
      name: "Sporting CP",
      champion: "0",
      country: "Portugal",
    },

    {
      name: "AC Milan",
      champion: "7",
      country: "Italy",
    },

    {
      name: "PSV Eindhoven",
      champion: "1",
      country: "Netherlands",
    },

    {
      name: "Aston Villa",
      champion: "0",
      country: "England",
    },

    {
      name: "Atalanta",
      champion: "0",
      country: "Italy",
    },

    {
      name: "Benefica",
      champion: "2",
      country: "Portugal",
    },

    {
      name: "FC Porto",
      champion: "2",
      country: "Portugal",
    },

    {
      name: "Roma",
      champion: "0",
      country: "Italy",
    },

    {
      name: "Atletico Madrid",
      champion: "0",
      country: "Spain",
    },
  ];
  
  const clubList = document.getElementById("clubList");
  let championsDisplayMode = "descending";
  let countrySortMode = "all";

  function renderClubs(clubs) {
    clubList.innerHTML = "";
    clubs.forEach((club) => {
      if (countrySortMode === "all" || club.country === countrySortMode) {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${club.name}</td>
                    <td>${club.country}</td>
                    <td>${club.champion}</td>
                `;
        clubList.appendChild(row);
      }
    });
  }

  function sortTable(property) {
    clubs.sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
    renderClubs(clubs);
  }

  function sortChampions() {
    let championsClubs = [];
    switch (championsDisplayMode) {
      case "descending":
        championsClubs = clubs.filter(
          (club) => parseInt(club.champion) > 0
        );
        championsClubs.sort(
          (a, b) => parseInt(b.champion) - parseInt(a.champion)
        );
        championsDisplayMode = "ascending";
        break;
      case "ascending":
        championsClubs = clubs.filter(
          (club) => parseInt(club.champion) > 0
        );
        championsClubs.sort(
          (a, b) => parseInt(a.champion) - parseInt(b.champion)
        );
        championsDisplayMode = "all";
        break;
      case "all":
        championsClubs = clubs;
        championsDisplayMode = "descending";
        break;
    }
    renderClubs(championsClubs);
  }

  function toggleCountrySorting() {
    const countryButton = document.querySelector("th:nth-child(2)");
    switch (countrySortMode) {
      case "all":
        countrySortMode = "England";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "England":
        countrySortMode = "France";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "France":
        countrySortMode = "Germany";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "Germany":
        countrySortMode = "Portugal";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "Portugal":
        countrySortMode = "Netherlands";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "Netherlands":
        countrySortMode = "Spain";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "Spain":
        countrySortMode = "Italy";
        countryButton.textContent = `Country ▼ (${countrySortMode})`;
        break;
      case "Italy":
        countrySortMode = "all";
        countryButton.textContent = "Country ▼ (All)";
        break;
    }
    renderClubs(clubs);
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderClubs(clubs);
  });