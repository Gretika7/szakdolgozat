CREATE DATABASE IF NOT EXISTS gamersmarket DEFAULT CHARACTER SET utf8 COLLATE utf8_hungarian_ci;
USE gamersmarket;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255) 
);

CREATE TABLE games(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title VARCHAR(255) ,
    short_description VARCHAR(255),
    long_description TEXT,
    system_requirements TEXT,
    company VARCHAR(255),
    picture VARCHAR(255),
    link VARCHAR(255),
    price INT
);

CREATE TABLE shopping(
    userid INT,
    gameid INT,
    purchase_date DATE,
    PRIMARY KEY (userid, gameid),
    FOREIGN KEY (userid) REFERENCES users(id),
    FOREIGN KEY (gameid) REFERENCES games(id)
);

INSERT INTO games (title, short_description, long_description, system_requiments, company, picture, link, price) VALUES
('Fortnite', 'A Fortnite az Epic Games által fejlesztett 2017-ben kiadott videókáték. Három különálló játékmód verzióban érhető el: Save the world; Battle Royal; Creative', 'A Fortnite egy pörgős, ingyenesen játszható Battle Royale, ahol 100 játékos küzd a túlélésért. Építs erődöket, gyűjts fegyvereket, és légy az utolsó talpon maradó! Kreatív módban saját világokat alkothatsz, a mentőakcióban pedig szörnyek hordái ellen harcolhatsz. Folyamatos frissítések, új skinek és', 'Intel Core i3-3225 / AMD Ryzen 3 1200, 8 GB RAM, NVIDIA GTX 960 / AMD Radeon R9 280', 'Epic Games','fortnite.png','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.epicgames.com%2Ffortnite%2Fen-US%2Fhome&psig=AOvVaw3J9J', 8000),

('GTA 5', 'A GTA V egy akciódús nyílt világú játék, ahol három bűnöző életét irányíthatod Los Santosban. Rabolj, vezess, lőj, és fedezd fel a hatalmas várost!','A GTA 5 egy nyílt világú akció-kalandjáték, ahol három bűnöző életét követheted Los Santosban. Rabolj bankokat, hajts szuperautókkal, fedezd fel a hatalmas várost és annak környékét. A történet izgalmas, a játékmenet változatos, a multiplayer mód pedig végtelen szórakozást nyújt.', ' Intel Core 2 Quad CPU Q6600 / AMD Phenom X4 9850, 4 GB RAM, NVIDIA 9800 GT 1GB / AMD HD 4870 1GB','Rocstar Games','gtav.png','https://www.youtube.com/watch?v=QkkoHAzjnUs', 15000),

('Minecraft', 'A Minecraft egy kreatív sandbox játék, ahol kockákból építhetsz bármit a végtelen világban. Bányássz, építs, fedezz fel, és éld túl a kalandokat!','A Minecraft egy sandbox játék, ahol kockákból építhetsz bármit, amit csak el tudsz képzelni. Fedezd fel a végtelen világot, gyűjts nyersanyagokat, harcolj szörnyekkel, és alkoss lenyűgöző építményeket. A játékban két fő mód van: a túlélő mód, ahol az életedért küzdesz, és a kreatív mód, ahol korlátl', ' Intel Core i3-3210 / AMD A8-7600 APU, 4GB RAM, Intel HD Graphics 4000 / AMD Radeon R5 series','Mojang','minecraft.png','https://www.youtube.com/watch?v=MmB9b5njVbA', 5000),

('EA FC 25', 'Az EA FC 25 a legújabb fociszimulátor, élethű grafikával és játékmenettel. Éld át a profi futball izgalmát a pályán és a menedzseri székben is!', 'Az EA FC 25 a legújabb fejezet a népszerű focis játékok sorozatában. Realisztikus játékmenet, fejlett grafika és a legfrissebb játékoskeretek várnak rád. Építsd fel álomcsapatod a Ultimate Team módban, vezesd győzelemre kedvenc klubodat a karrier módban, vagy mérkőzz meg barátaiddal online. Az EA FC', ' Intel Core i5-6600K / AMD Ryzen 5 1600, 8 GB RAM, NVIDIA GeForce GTX 1050 Ti 4GB / AMD Radeon RX 570 4GB','Electronic Arts','fifaeafc25.png','https://www.youtube.com/watch?v=pBM2xyco_Kg', 12000),

('Forza Horizon 5', 'A Forza Horizon 5 egy nyílt világú autóversenyzős játék, ahol Mexikó változatos tájain száguldozhatsz. Fedezd fel a sivatagokat, dzsungeleket és városokat, miközben izgalmas versenyeken veszel részt!','A Forza Horizon 5 egy nyílt világú autóversenyzős játék, ahol Mexikó változatos tájain száguldozhatsz. Fedezd fel a sivatagokat, dzsungeleket, városokat és vulkánokat több száz autó volánja mögött. Versenyezz, hajts végre kihívásokat, és gyűjts autókat. A játék lenyűgöző grafikával és dinamikus időj', 'Intel i5-4460 / AMD Ryzen 3 1200, 8 GB RAM, NVidia GTX 970 / AMD RX 470','Playground Games','forzahorizon5.png','https://www.youtube.com/watch?v=FYH9n37B7Yw', 9000),

('Counter Strike 2', 'A Counter-Strike egy izgalmas, csapat alapú lövöldözős játék, ahol terroristák és terrorelhárítók küzdenek egymással. Taktika, gyorsaság és jó reflexek kellenek a győzelemhez!', 'A Counter-Strike 2 a legendás taktikai FPS játék legújabb kiadása. Csapatmunka, stratégia és villámgyors reflexek döntik el a győzelmet. Bombák, túszejtés, fegyverarzenál, profi e-sport. Fejlett grafika, új pályák és játékmódok várnak rád. Versenyezz barátaiddal vagy más játékosokkal online, és válj', 'Intel® Core™ i5-3330 / AMD Ryzen™ 3 1200, 8 GB RAM, NVIDIA GeForce GTX 1050Ti / AMD Radeon RX 580','Valve','cs2.png','https://www.youtube.com/watch?v=c80dVYcL69E',10000),

('Resident Evil 7', ' Resident Evil 7 egy túlélőhorror játék, ahol egy rejtélyes birtokon kell túlélned. Fedezd fel a Baker család titkait, harcolj a borzalmakkal, és menekülj el élve!','A Resident Evil 7 egy túlélőhorror, ahol Ethan Winters bőrébe bújva kell megkeresned eltűnt feleségedet egy elhagyatott birtokon. Feszült légkör, rejtélyek, fertőzött ellenfelek és ijesztő pillanatok várnak rád. Az első személyű nézet fokozza az élményt, a szűkös erőforrások pedig a túlélésért való ', ' Intel Core i5-4460 / AMD FX-6300, 8 GB RAM, NVIDIA GeForce GTX 760 / AMD Radeon R7 260x','Capcom','residentevil7.png','https://www.youtube.com/watch?v=RgYqQsbKn6w', 14000),

('Sims 4', 'A Sims 4-ben virtuális életeket élhetsz. Készíts egyedi simeket, építs házakat, alakíts ki kapcsolatokat, és kövesd álmaidat! Legyél híres, gazdag, vagy éld a csendes vidéki életet.','A Sims 4-ben virtuális életeket irányíthatsz. Alkosd meg egyedi Simeidet, építs álomotthonokat, és alakítsd kapcsolataikat. Karrierek, romantika, barátságok – minden a te kezedben van. A játék tele van lehetőségekkel, a kreativitásodnak csak a képzeleted szab határt. Legyél sikeres művész, híres séf', '1.8 GHz Intel Core 2 Duo, AMD Athlon 64 Dual-Core 4000+ vagy ezzel egyenértékű (beépített grafikus vezérlővel rendelkező számítógépek esetén 2.0 GHz Intel Core 2 Duo, 2.0 GHz AMD Turion 64 X2 TL-62 vagy ezzel egyenértékű), 4 GB RAM, NVIDIA GeForce 6600, ATI Radeon X1300, Intel GMA X4500','Electronic Arts','sims4.png','https://www.youtube.com/watch?v=WCVS01ZXBrk', 4000),

('Pubg', 'A PUBG egy izgalmas túlélőjáték, ahol 100 játékos küzd egymással egy szigeten. Gyűjts fegyvereket, harcolj, és légy az utolsó túlélő a zsugorodó játéktéren!','A PUBG (PlayerUnknown\s Battlegrounds) egy Battle Royale játék, ahol 100 játékos küzd a túlélésért egy hatalmas szigeten. Gyűjts fegyvereket, járműveket, és légy az utolsó túlélő. Taktika, gyors reflexek és szerencse is kell a győzelemhez. A játék valósághű fegyverkezelést és izgalmas csatákat kínál', 'Intel Core i5-4430 / AMD FX-6300, 8 GB RAM, NVIDIA GeForce GTX 960 2GB / AMD Radeon R7 370 2GB','PUBG Studio','pubg.png','https://www.youtube.com/watch?v=uCd6tbUAy6o', 7500),

( 'Witcher 3', 'A Witcher 3 egy hatalmas nyílt világú szerepjáték, ahol Geralt, a szörnyvadász bőrébe bújsz. Fedezd fel a varázslatos világot, harcolj szörnyekkel, és hozz nehéz döntéseket!','A Witcher 3: Wild Hunt egy nyílt világú akció-szerepjáték, ahol Geralt of Riviát, a szörnyvadászt alakítod. Fedezd fel a hatalmas kontinenst, teljesíts küldetéseket, harcolj szörnyekkel, és hozz nehéz döntéseket. A játék lenyűgöző grafikával, mély történettel és emlékezetes karakterekkel rendelkezik', 'Intel Core i5-2500K 3.3GHz / AMD Phenom II X4 940, 6 GB RAM, Nvidia GeForce GTX 660 / AMD Radeon HD 7870','CD Projekt','Wither3.png','https://www.youtube.com/watch?v=1-l29HlKkXU', 10000),

( 'Red Dead 2 Redemption', 'A Red Dead Redemption 2 egy lenyűgöző western kalandjáték. Fedezd fel a vadnyugatot Arthur Morgan, a törvényen kívüli bőrében. Lovagolj, vadássz, harcolj, és éld át a Van der Linde banda izgalmas tört','A Red Dead Redemption 2 egy epikus western kaland, ahol Arthur Morgan, a Van der Linde banda tagjaként éled a vadnyugat alkonyát. Fedezd fel a lenyűgöző nyílt világot, vadássz, horgássz, és vegyél részt izgalmas küldetésekben. A játék realisztikus grafikával, mély történettel és emlékezetes karakter', 'Intel Core i5-2500K / AMD FX-6300, 8 GB RAM, Nvidia GeForce GTX 770 2GB / AMD Radeon R9 280 3GB','Rocstar Games','reddead2redemption.png','https://www.youtube.com/watch?v=gmA6MrX81z4', 20000),

( 'Call of Duty - Warzone', 'A Call of Duty: Warzone egy ingyenesen játszható, hatalmas csatákkal teli lövöldözős játék. Csatlakozz barátaiddal, vagy játssz egyedül, és harcolj a győzelemért a zsugorodó játéktéren. Gyűjts fegyver','A Call of Duty: Warzone egy ingyenesen játszható Battle Royale, ahol 150 játékos küzd a túlélésért egy hatalmas pályán. Gyűjts fegyvereket, páncélt és felszerelést, és légy az utolsó csapat, amelyik talpon marad. A játékban különböző játékmódok és pályák várnak rád, folyamatosan frissülő tartalommal', ' Intel Core i3-6100 / AMD Ryzen 3 1200, 8GB RAM, NVIDIA GeForce GTX 960 / AMD Radeon RX 470.','Activision','codwarzone.png','https://www.youtube.com/watch?v=0E44DClsX5Q', 0);
