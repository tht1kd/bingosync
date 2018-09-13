bingoGenerator = require("./generators/generator_bases/ladx_generator.js");

var bingoList = [
    { "name": "10 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "12 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "14 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "16 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "18 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "20 Moons (Cap)", "group": "Cap_Moons" },
    { "name": "30 Regional Coins (Cap)", "group": "Cap_Regional" },
    { "name": "35 Regional Coins (Cap)", "group": "Cap_Regional" },
    { "name": "40 Regional Coins (Cap)", "group": "Cap_Regional" },
    { "name": "45 Regional Coins (Cap)", "group": "Cap_Regional" },
    { "name": "50 Regional Coins (Cap)", "group": "Cap_Regional" },
    { "name": "Koopa Freerunning (Cap)", "group": "Cap" },
    { "name": "6 Moons from sub-areas (Cap)", "group": "Cap" },
    { "name": "8 Moons from sub-areas (Cap)", "group": "Cap" },
    { "name": "The Forgotten Treasure (Cap)", "group": "Cap" },
    { "name": "18 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "20 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "22 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "24 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "26 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "28 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "30 Moons (Cascade)", "group": "Cascade_Moons" },
    { "name": "30 Regional Coins (Cascade)", "group": "Cascade_Regional" },
    { "name": "35 Regional Coins (Cascade)", "group": "Cascade_Regional" },
    { "name": "40 Regional Coins (Cascade)", "group": "Cascade_Regional" },
    { "name": "45 Regional Coins (Cascade)", "group": "Cascade_Regional" },
    { "name": "50 Regional Coins (Cascade)", "group": "Cascade_Regional" },
    { "name": "Koopa Freerunning (Cascade)", "group": "Cascade" },
    { "name": "6 Moons from sub-areas (Cascade)", "group": "Cascade" },
    { "name": "8 Moons from sub-areas (Cascade)", "group": "Cascade" },
    { "name": "10 Moons from sub-areas (Cascade)", "group": "Cascade" },
    { "name": "Tostarena-Tourist in the Cascade Kingdom!", "group": "Tourist" },
    { "name": "Caveman Cave-Fan (Cascade)", "group": "Cascade" },
    { "name": "50 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "54 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "58 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "62 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "66 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "70 Moons (Sand)", "group": "Sand_Moons" },
    { "name": "50 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "55 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "60 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "65 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "70 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "75 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "80 Regional Coins (Sand)", "group": "Sand_Regional" },
    { "name": "Koopa Freerunning (Sand)", "group": "Sand" },
    { "name": "Music-Toad (Sand)", "group": "Sand" },
    { "name": "Outfit-Door (Sand)", "group": "Locked_Door" },
    { "name": "Sand Kingdom: Sphynx Quiz Complete!", "group": "Sphynx" },
    { "name": "8 Moons from sub-areas (Sand)", "group": "Sand" },
    { "name": "10 Moons from sub-areas (Sand)", "group": "Sand" },
    { "name": "12 Moons from sub-areas (Sand)", "group": "Sand" },
    { "name": "Tostarena-Tourist in the Sand Kingdom!", "group": "Tourist" },
    { "name": "Herding Sheep in the Dunes (Sand)", "group": "Sand" },
    { "name": "Koopa Trace-Walking (Sand)", "group": "Sand" },
    { "name": "Ice Cave Treasure-Moon (Sand)", "group": "Sand" },
    { "name": "24 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "26 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "28 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "30 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "32 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "34 Moons (Lake)", "group": "Lake_Moons" },
    { "name": "30 Regional Coins (Lake)", "group": "Lake_Regional" },
    { "name": "35 Regional Coins (Lake)", "group": "Lake_Regional" },
    { "name": "40 Regional Coins (Lake)", "group": "Lake_Regional" },
    { "name": "45 Regional Coins (Lake)", "group": "Lake_Regional" },
    { "name": "50 Regional Coins (Lake)", "group": "Lake_Regional" },
    { "name": "Koopa Freerunning (Lake)", "group": "Lake" },
    { "name": "Plant 1 Seed (Lake)", "group": "Seeds" },
    { "name": "4 Moons from sub-areas (Lake)", "group": "Lake" },
    { "name": "6 Moons from sub-areas (Lake)", "group": "Lake" },
    { "name": "Puzzle Room Solved! (Lake)", "group": "Lake" },
    { "name": "1 Moon from the Lochlady Sisters", "group": "Lake" },
    { "name": "2 Moons from the Lochlady Sisters", "group": "Lake" },
    { "name": "3 Moons from the Lochlady Sisters", "group": "Lake" },
    { "name": "40 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "44 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "48 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "52 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "56 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "60 Moons (Wooded)", "group": "Wooded_Moons" },
    { "name": "50 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "55 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "60 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "65 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "70 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "75 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "80 Regional Coins (Wooded)", "group": "Wooded_Regional" },
    { "name": "Bonneter-Scientist (Wooded)", "group": "Wooded" },
    { "name": "5 Moons (Deep Woods)", "group": "Deep_Woods" },
    { "name": "6 Moons (Deep Woods)", "group": "Deep_Woods" },
    { "name": "7 Moons (Deep Woods)", "group": "Deep_Woods" },
    { "name": "8 Moons (Deep Woods)", "group": "Deep_Woods" },
    { "name": "Koopa Freerunning (Wooded)", "group": "Wooded" },
    { "name": "Music-Toad (Wooded)", "group": "Wooded" },
    { "name": "9 Moons from Nuts", "group": "Nuts" },
    { "name": "10 Moons from Nuts", "group": "Nuts" },
    { "name": "11 Moons from Nuts", "group": "Nuts" },
    { "name": "12 Moons from Nuts", "group": "Nuts" },
    { "name": "13 Moons from Nuts", "group": "Nuts" },
    { "name": "14 Moons from Nuts", "group": "Nuts" },
    { "name": "Outfit-Door (Wooded)", "group": "Locked_Door" },
    { "name": "8 Moons from sub-areas (Wooded)", "group": "Wooded" },
    { "name": "10 Moons from sub-areas (Wooded)", "group": "Wooded" },
    { "name": "12 Moons from sub-areas (Wooded)", "group": "Wooded" },
    { "name": "14 Moons from sub-areas (Wooded)", "group": "Wooded" },
    { "name": "Inside a Rock in the Forest (Wooded)", "group": "Wooded" },
    { "name": "A Treasure Made from Coins (Wooded)", "group": "Wooded" },
    { "name": "Yoofoe-Invader in the Wooded Kingdom!", "group": "Wooded" },
    { "name": "4 Moons (Cloud)", "group": "Cloud_Moons" },
    { "name": "6 Moons (Cloud)", "group": "Cloud_Moons" },
    { "name": "2 Moons from sub-areas (Cloud)", "group": "Cloud" },
    { "name": "Goomba Picture-Match (Cloud)", "group": "Cloud" },
    { "name": "16 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "18 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "20 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "22 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "24 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "26 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "28 Moons (Lost)", "group": "Lost_Moons" },
    { "name": "30 Regional Coins (Lost)", "group": "Lost_Regional" },
    { "name": "35 Regional Coins (Lost)", "group": "Lost_Regional" },
    { "name": "40 Regional Coins (Lost)", "group": "Lost_Regional" },
    { "name": "45 Regional Coins (Lost)", "group": "Lost_Regional" },
    { "name": "50 Regional Coins (Lost)", "group": "Lost_Regional" },
    { "name": "Bonneter-Scientist (Lost)", "group": "Lost" },
    { "name": "Koopa Freerunning (Lost)", "group": "Lost"},
    { "name": "2 Moons from sub-areas (Lost)", "group": "Lost" },
    { "name": "4 Moons from sub-areas (Lost)", "group": "Lost" },
    { "name": "50 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "54 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "56 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "62 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "66 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "70 Moons (Metro)", "group": "Metro_Moons" },
    { "name": "50 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "55 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "60 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "65 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "70 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "75 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "80 Regional Coins (Metro)", "group": "Metro_Regional" },
    { "name": "Koopa Freerunning (Metro)", "group": "Metro" },
    { "name": "Music-Toad (Metro)", "group": "Metro" },
    { "name": "Outfit-Door (Metro)", "group": "Locked_Door" },
    { "name": "12 Moons from sub-areas (Metro)", "group": "Metro" },
    { "name": "14 Moons from sub-areas (Metro)", "group": "Metro" },
    { "name": "16 Moons from sub-areas (Metro)", "group": "Metro" },
    { "name": "18 Moons from sub-areas (Metro)", "group": "Metro" },
    { "name": "Tostarena-Tourist in the Metro Kingdom!", "group": "Tourist" },
    { "name": "Free Parking: On the Helipad Rooftop! (Metro)", "group": "Metro" },
    { "name": "Jump-Rope Hero! (Metro)", "group": "Metro" },
    { "name": "RC Car: Race Complete!", "group": "Metro" },
    { "name": "Metro Kingdom: Pauline Quiz Complete!", "group": "Metro" },
    { "name": "Free Parking: Leap of Faith! (Metro)", "group": "Metro" },
    { "name": "Power Station: Puzzle Solved! (Metro)", "group": "Metro" },
    { "name": "32 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "34 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "36 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "38 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "40 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "42 Moons (Snow)", "group": "Snow_Moons" },
    { "name": "30 Regional Coins (Snow)", "group": "Snow_Regional" },
    { "name": "35 Regional Coins (Snow)", "group": "Snow_Regional" },
    { "name": "40 Regional Coins (Snow)", "group": "Snow_Regional" },
    { "name": "45 Regional Coins (Snow)", "group": "Snow_Regional" },
    { "name": "50 Regional Coins (Snow)", "group": "Snow_Regional" },
    { "name": "Bonneter-Scientist (Snow)", "group": "Snow" },
    { "name": "Koopa Freerunning (Snow)", "group": "Snow" },
    { "name": "Outfit-Door (Snow)", "group": "Locked_Door" },
    { "name": "6 Moons from sub-areas (Snow)", "group": "Snow" },
    { "name": "8 Moons from sub-areas (Snow)", "group": "Snow" },
    { "name": "10 Moons from sub-areas (Snow)", "group": "Snow" },
    { "name": "Koopa Trace-Walking (Snow)", "group": "Snow" },
    { "name": "Snowline Circuit: Class S Race (Snow)", "group": "Snow" },
    { "name": "Iceburn Circuit: Class A Race (Snow)", "group": "Snow" },
    { "name": "Iceburn Circuit: Class S Race (Snow)", "group": "Snow" },
    { "name": "40 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "44 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "48 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "52 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "56 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "60 Moons (Seaside)", "group": "Seaside_Moons" },
    { "name": "50 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "55 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "60 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "65 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "70 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "75 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "80 Regional Coins (Seaside)", "group": "Seaside_Regional" },
    { "name": "Koopa Freerunning (Seaside)", "group": "Seaside" },
    { "name": "Outfit-Door (Seaside)", "group": "Locked_Door" },
    { "name": "Plant 2 Seeds (Seaside)", "group": "Seeds" },
    { "name": "Plant 3 Seeds (Seaside)", "group": "Seeds" },
    { "name": "Plant 4 Seeds (Seaside)", "group": "Seeds" },
    { "name": "Seaside Kingdom: Sphynx Quiz Complete!", "group": "Sphynx" },
    { "name": "6 Moons from sub-areas (Seaside)", "group": "Seaside" },
    { "name": "8 Moons from sub-areas (Seaside)", "group": "Seaside" },
    { "name": "10 Moons from sub-areas (Seaside)", "group": "Seaside" },
    { "name": "Beach Volleyball: Champ! (Seaside)", "group": "Seaside" },
    { "name": "44 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "46 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "48 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "50 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "52 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "54 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "56 Moons (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "50 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "55 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "60 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "65 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "70 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "75 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "80 Regional Coins (Luncheon)", "group": "Luncheon_Moons" },
    { "name": "Koopa Freerunning (Luncheon)", "group": "Luncheon" },
    { "name": "Music-Toad (Luncheon)", "group": "Luncheon" },
    { "name": "8 Moons from sub-areas (Luncheon)", "group": "Luncheon" },
    { "name": "10 Moons from sub-areas (Luncheon)", "group": "Luncheon" },
    { "name": "12 Moons from sub-areas (Luncheon)", "group": "Luncheon" },
    { "name": "14 Moons from sub-areas (Luncheon)", "group": "Luncheon" },
    { "name": "Tostarena-Tourist in the Luncheon Kingdom!", "group": "Tourist" },
    { "name": "2 Moons from Golden Turnips", "group": "Turnips" },
    { "name": "3 Moons from Golden Turnips", "group": "Turnips" },
    { "name": "Treasure Beneath the Cheese Rocks (Luncheon)", "group": "Luncheon" },
    { "name": "Mechanic: Repairs Complete! (Luncheon)", "group": "Luncheon" },
    { "name": "Diving from the Big Pot! (Luncheon)", "group": "Luncheon" },
    { "name": "6 Moons (Ruined)", "group": "Ruined_Moons" },
    { "name": "8 Moons (Ruined)", "group": "Ruined_Moons" },
    { "name": "2 Moons from sub-areas (Ruined)", "group": "Ruined" },
    { "name": "4 Moons from sub-areas (Ruined)", "group": "Ruined" },
    { "name": "40 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "42 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "44 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "46 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "48 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "50 Moons (Bowser's)", "group": "Bowser_Moons" },
    { "name": "50 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "55 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "60 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "65 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "70 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "75 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "80 Regional Coins (Bowser's)", "group": "Bowser_Regional" },
    { "name": "Bonneter-Scientist (Bowser's)", "group": "Bowser" },
    { "name": "Koopa Freerunning (Bowser's)", "group": "Bowser" },
    { "name": "Outfit-Door (Bowser's)", "group": "Locked_Door" },
    { "name": "2 Moons from Pokio-Spots (Bowser's)", "group": "Bowser" },
    { "name": "3 Moons from Pokio-Spots (Bowser's)", "group": "Bowser" },
    { "name": "4 Moons from Pokio-Spots (Bowser's)", "group": "Bowser" },
    { "name": "8 Moons from sub-areas (Bowser's)", "group": "Bowser" },
    { "name": "10 Moons from sub-areas (Bowser's)", "group": "Bowser" },
    { "name": "12 Moons from sub-areas (Bowser's)", "group": "Bowser" },
    { "name": "Ogre Extermination: On the Distant Island! (Bowser's)", "group": "Bowser" },
    { "name": "Yoofoe-Invader in Bowser's Kingdom!", "group": "Bowser" },
    { "name": "18 Moons (Moon)", "group": "Moon_Moons" },
    { "name": "20 Moons (Moon)", "group": "Moon_Moons" },
    { "name": "22 Moons (Moon)", "group": "Moon_Moons" },
    { "name": "24 Moons (Moon)", "group": "Moon_Moons" },
    { "name": "26 Moons (Moon)", "group": "Moon_Moons" },
    { "name": "30 Regional Coins (Moon)", "group": "Moon_Regional" },
    { "name": "35 Regional Coins (Moon)", "group": "Moon_Regional" },
    { "name": "40 Regional Coins (Moon)", "group": "Moon_Regional" },
    { "name": "45 Regional Coins (Moon)", "group": "Moon_Regional" },
    { "name": "50 Regional Coins (Moon)", "group": "Moon_Regional" },
    { "name": "Koopa Freerunning (Moon)", "group": "Moon" },
    { "name": "2 Moons (Moon Caves)", "group": "Moon_Caves" },
    { "name": "3 Moons (Moon Caves)", "group": "Moon_Caves" },
    { "name": "4 Moons (Moon Caves)", "group": "Moon_Caves" },
    { "name": "Moon Kingdom: Sphynx Quiz Complete!", "group": "Sphynx" },
    { "name": "2 Moons from sub-areas (Moon)", "group": "Moon" },
    { "name": "4 Moons from sub-areas (Moon)", "group": "Moon" },
    { "name": "Tostarena-Tourist in the Moon Kingdom!", "group": "Tourist" },
    { "name": "Koopa Trace-Walking (Moon)", "group": "Moon" },
    { "name": "Doctor in the House! (Moon)", "group": "Moon" },
    { "name": "Jumping High as a Frog (Moon)", "group": "Moon" },
    { "name": "20 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "22 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "24 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "26 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "28 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "30 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "32 Moons (Mushroom)", "group": "Mushroom_Moons" },
    { "name": "10 Moons from Toadette-Achievements", "group": "Achievements" },
    { "name": "15 Moons from Toadette-Achievements", "group": "Achievements" },
    { "name": "20 Moons from Toadette-Achievements", "group": "Achievements" },
    { "name": "50 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "55 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "60 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "65 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "70 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "75 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "80 Regional Coins (Mushroom)", "group": "Mushroom_Regional" },
    { "name": "Koopa Freerunning (Mushroom)", "group": "Mushroom" },
    { "name": "Music-Toad (Mushroom)", "group": "Mushroom" },
    { "name": "Outfit-Door (Mushroom)", "group": "Locked_Door" },
    { "name": "2 Moons from sub-areas (Mushroom)", "group": "Mushroom" },
    { "name": "4 Moons from sub-areas (Mushroom)", "group": "Mushroom" },
    { "name": "Tostarena-Tourist in the Mushroom Kingdom!", "group": "Tourist" },
    { "name": "Herding Sheep at Peach's Castle (Mushroom)", "group": "Mushroom" },
    { "name": "Eating Fruit with Yoshi: First Serving! (Mushroom)", "group": "Mushroom" },
    { "name": "Eating Fruit with Yoshi: Second Serving! (Mushroom)", "group": "Mushroom" },
    { "name": "Eating Fruit with Yoshi: Third Serving! (Mushroom)", "group": "Mushroom" },
    { "name": "Mario Picture-Match (Mushroom)", "group": "Mushroom" },
    { "name": "Knucklotec Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "Torkdrift Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "Mechawiggler Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "Mollusque-Lanceur Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "Cookatiel Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "Ruined Dragon Rematch in the Mushroom Kingdom!", "group": "Rematch" },
    { "name": "2 Boss Rematches (Mushroom)", "group": "Rematch" },
    { "name": "3 Boss Rematches (Mushroom)", "group": "Rematch" },
    { "name": "4 Boss Rematches (Mushroom)", "group": "Rematch" },
    { "name": "9 Unique Life-Up Hearts (excl. Shops)", "group": "LifeUp" },
    { "name": "11 Unique Life-Up Hearts (excl. Shops)", "group": "LifeUp" },
    { "name": "13 Unique Life-Up Hearts (excl. Shops)", "group": "LifeUp" },
    { "name": "Open 6 Moon Rocks", "group": "Moon_Rocks" },
    { "name": "Open 7 Moon Rocks", "group": "Moon_Rocks" },
    { "name": "Open 8 Moon Rocks", "group": "Moon_Rocks" },
    { "name": "Open 9 Moon Rocks", "group": "Moon_Rocks" },
    { "name": "13 Moons from 8-bit Sections", "group": "8bit" },
    { "name": "15 Moons from 8-bit Sections", "group": "8bit" },
    { "name": "17 Moons from 8-bit Sections", "group": "8bit" },
    { "name": "19 Moons from 8-bit Sections", "group": "8bit" },
    { "name": "2 Moons from Binoculars", "group": "Binoculars" },
    { "name": "3 Moons from Binoculars", "group": "Binoculars" },
    { "name": "4 Moons from Binoculars", "group": "Binoculars" },
    { "name": "5 Moons from Birds", "group": "Birds" },
    { "name": "6 Moons from Birds", "group": "Birds" },
    { "name": "7 Moons from Birds", "group": "Birds" },
    { "name": "6 Captain Toad Moons", "group": "Captain_Toad" },
    { "name": "7 Captain Toad Moons", "group": "Captain_Toad" },
    { "name": "8 Captain Toad Moons", "group": "Captain_Toad" },
    { "name": "4 Moons from Wooden Crates", "group": "Crates" },
    { "name": "5 Moons from Wooden Crates", "group": "Crates" },
    { "name": "6 Moons from Wooden Crates", "group": "Crates" },
    { "name": "4 Moons from Goombas", "group": "Goomba" },
    { "name": "5 Moons from Goombas", "group": "Goomba" },
    { "name": "6 Moons from Goombas", "group": "Goomba" },
    { "name": "7 Moons from Goombas", "group": "Goomba" },
    { "name": "2 Moons from Hat-and-Seek", "group": "Hat_Seek" },
    { "name": "3 Moons from Hat-and-Seek", "group": "Hat_Seek" },
    { "name": "4 Moons from Hat-and-Seek", "group": "Hat_Seek" },
    { "name": "6 Hat-Throwing Moons", "group": "Hat_Throw" },
    { "name": "8 Hat-Throwing Moons", "group": "Hat_Throw" },
    { "name": "10 Hat-Throwing Moons", "group": "Hat_Throw" },
    { "name": "Look at 6 Hint Arts", "group": "Hint_View" },
    { "name": "Look at 7 Hint Arts", "group": "Hint_View" },
    { "name": "Look at 8 Hint Arts", "group": "Hint_View" },
    { "name": "Look at 9 Hint Arts", "group": "Hint_View" },
    { "name": "4 Moons from Hint Art", "group": "Hint_Moon" },
    { "name": "5 Moons from Hint Art", "group": "Hint_Moon" },
    { "name": "6 Moons from Hint Art", "group": "Hint_Moon" },
    { "name": "6 Moons from Keys", "group": "Keys" },
    { "name": "8 Moons from Keys", "group": "Keys" },
    { "name": "10 Moons from Keys", "group": "Keys" },
    { "name": "12 Moons from Keys", "group": "Keys" },
    { "name": "6 Moons from Koopa Freerunning", "group": "Freerunning" },
    { "name": "8 Moons from Koopa Freerunning", "group": "Freerunning" },
    { "name": "10 Moons from Koopa Freerunning", "group": "Freerunning" },
    { "name": "12 Moons from Koopa Freerunning", "group": "Freerunning" },
    { "name": "8 Moons from Moon Shards", "group": "Moon_Shards" },
    { "name": "10 Moons from Moon Shards", "group": "Moon_Shards" },
    { "name": "12 Moons from Moon Shards", "group": "Moon_Shards" },
    { "name": "14 Moons from Moon Shards", "group": "Moon_Shards" },
    { "name": "10 Moons from Music Notes", "group": "Music_Notes" },
    { "name": "12 Moons from Music Notes", "group": "Music_Notes" },
    { "name": "14 Moons from Music Notes", "group": "Music_Notes" },
    { "name": "16 Moons from Music Notes", "group": "Music_Notes" },
    { "name": "2 Moons from Music-Toad", "group": "Music_Toad" },
    { "name": "3 Moons from Music-Toad", "group": "Music_Toad" },
    { "name": "6 Moons from Peach", "group": "Peach" },
    { "name": "7 Moons from Peach", "group": "Peach" },
    { "name": "8 Moons from Peach", "group": "Peach" },
    { "name": "9 Moons from Peach", "group": "Peach" },
    { "name": "4 Moons from Rabbits", "group": "Rabbits" },
    { "name": "6 Moons from Rabbits", "group": "Rabbits" },
    { "name": "8 Moons from Rabbits", "group": "Rabbits" },
    { "name": "Plant 6 Seeds (Total)", "group": "Seeds" },
    { "name": "Plant 7 Seeds (Total)", "group": "Seeds" },
    { "name": "Plant 8 Seeds (Total)", "group": "Seeds" },
    { "name": "Plant 9 Seeds (Total)", "group": "Seeds" },
    { "name": "Plant 10 Seeds (Total)", "group": "Seeds" },
    { "name": "2 Moons from Seeds", "group": "Seed_Moons" },
    { "name": "3 Moons from Seeds", "group": "Seed_Moons" },
    { "name": "4 Moons from Seeds", "group": "Seed_Moons" },
    { "name": "3 Moons from Shiny Rocks", "group": "Shiny_Rocks" },
    { "name": "4 Moons from Shiny Rocks", "group": "Shiny_Rocks" },
    { "name": "5 Moons from Shiny Rocks", "group": "Shiny_Rocks" },
    { "name": "9 Timer Challenges", "group": "Timer" },
    { "name": "11 Timer Challenges", "group": "Timer" },
    { "name": "13 Timer Challenges", "group": "Timer" },
    { "name": "15 Timer Challenges", "group": "Timer" },
    { "name": "17 Timer Challenges", "group": "Timer" },
    { "name": "19 Timer Challenges", "group": "Timer" },
    { "name": "21 Timer Challenges", "group": "Timer" },
    { "name": "11 Treasure Chest Moons", "group": "Treasure_Chest" },
    { "name": "13 Treasure Chest Moons", "group": "Treasure_Chest" },
    { "name": "15 Treasure Chest Moons", "group": "Treasure_Chest" },
    { "name": "17 Treasure Chest Moons", "group": "Treasure_Chest" },
    { "name": "19 Treasure Chest Moons", "group": "Treasure_Chest" },
    { "name": "4 Warp-Painting Moons", "group": "Warp_Painting" },
    { "name": "5 Warp-Painting Moons", "group": "Warp_Painting" },
    { "name": "6 Warp-Painting Moons", "group": "Warp_Painting" },
    { "name": "7 Warp-Painting Moons", "group": "Warp_Painting" },
    { "name": "Purchase 6 Unique Moons", "group": "Shop_Moons" },
    { "name": "Purchase 7 Unique Moons", "group": "Shop_Moons" },
    { "name": "Purchase 8 Unique Moons", "group": "Shop_Moons" },
    { "name": "Purchase 9 Unique Moons", "group": "Shop_Moons" },
    { "name": "1 Moon from Lakitu-Fishing", "group": "Fishing" },
    { "name": "2 Moons from Lakitu-Fishing", "group": "Fishing" },
    { "name": "3 Moons from Lakitu-Fishing", "group": "Fishing" }
];
