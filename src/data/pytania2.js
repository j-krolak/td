import { PYTANIA } from "./pytania.js";
// Dodatkowa pula pytań, dołączana do PYTANIA z pytania.js
PYTANIA.push(
  // --- warstwy i enkapsulacja ---
  { q: "Jednostka danych warstwy sieciowej to:", o: ["ramka", "datagram (pakiet)", "segment", "bit"], a: [1], e: "Segment – L4, datagram – L3, ramka – L2, bity – L1." },
  { q: "Numery portów należą do warstwy:", o: ["fizycznej", "łącza danych", "sieciowej", "transportowej"], a: [3], e: "Porty rozróżniają programy – to TCP/UDP, warstwa 4." },
  { q: "Adres MAC należy do warstwy:", o: ["1", "2", "3", "4"], a: [1], e: "MAC = warstwa łącza danych (L2), IP = L3." },
  { q: "Enkapsulacja polega na tym, że:", o: [
    "każda warstwa dokłada do danych własny nagłówek", "dane są szyfrowane w każdej warstwie",
    "ruter usuwa wszystkie nagłówki", "dane są kompresowane"], a: [0], e: "Dane → segment → datagram → ramka → bity." },
  { q: "Który protokół służy do przesyłania poczty e-mail?", o: ["SMTP", "FTP", "ARP", "OSPF"], a: [0], e: "SMTP – poczta, FTP – pliki, HTTP – WWW." },
  { q: "Który protokół transportowy NIE zapewnia niezawodności, kontroli przepływu ani kontroli zatorów?", o: ["TCP", "UDP", "IP", "SCTP"], a: [1], e: "UDP – „bez niczego”: bezpołączeniowy, bez gwarancji." },
  { q: "Ruter nie potrzebuje do przekazywania pakietów warstwy:", o: ["fizycznej", "łącza danych", "sieciowej", "transportowej"], a: [3], e: "Ruter ma warstwy 1–3, TCP nie jest mu potrzebne." },

  // --- Ethernet / Wi-Fi ---
  { q: "Przerwa międzyramkowa w Ethernecie 10 Mb/s to:", o: ["9,6 µs", "96 µs", "0,96 µs", "9,6 ms"], a: [0], e: "Po zwolnieniu medium stacja czeka 9,6 µs (interframe gap)." },
  { q: "Sygnał jam po wykryciu kolizji służy do tego, aby:", o: [
    "wszyscy odbiorcy na pewno wykryli kolizję", "zwiększyć prędkość łącza", "zmienić kanał", "potwierdzić odbiór ramki"], a: [0], e: "Stacja kontynuuje nadawanie do minimalnego czasu ramki." },
  { q: "CSMA/CD w 10 Gigabit Ethernet:", o: ["jest podstawą działania", "nie jest używane", "działa tylko w trybie half-duplex", "jest zamienione na CSMA/CA"], a: [1], e: "W full-duplex ze switchem kolizje nie występują." },
  { q: "W full-duplex Ethernet kolizje są:", o: ["częste", "niemożliwe", "możliwe tylko na światłowodzie", "wykrywane przez jam"], a: [1], e: "Nadawanie i odbiór idą osobnymi torami łącza punkt-punkt." },
  { q: "Medium 10BASE2 to:", o: ["skrętka", "cienki koncentryk 50 Ω", "światłowód wielomodowy", "gruby koncentryk 75 Ω"], a: [1], e: "10BASE5 – gruby koncentryk, 10BASE2 – cienki, oba half-duplex." },
  { q: "10GBASE-T działa na:", o: ["skrętce do 100 m", "światłowodzie jednomodowym do 10 km", "koncentryku", "światłowodzie wielomodowym 850 nm"], a: [0], e: "IEEE 802.3an. T = twisted pair." },
  { q: "10GBASE-ER to:", o: ["wielomodowy, 850 nm", "jednomodowy, 1310 nm, <10 km", "jednomodowy, 1550 nm, <40 km", "skrętka"], a: [2], e: "SR 850 nm, LR 1310 nm/10 km, ER 1550 nm/40 km." },
  { q: "Problem ukrytego terminala w Wi-Fi to sytuacja, gdy węzeł:", o: [
    "jest widoczny dla AP, ale niewidoczny dla innych węzłów łączących się z AP", "jest widoczny dla wszystkich", "nie ma adresu MAC", "używa innego kanału"], a: [0], e: "Obie stacje słyszą AP, ale nie siebie → kolizje u AP." },
  { q: "RTS/CTS to skróty od:", o: [
    "Request To Send / Clear To Send", "Receive To Send / Check To Send", "Ready To Send / Continue To Send", "Reserve The Spectrum / Confirm The Spectrum"], a: [0], e: "Krótka wymiana przed nadaniem – redukuje kolizje (ukryty terminal)." },
  { q: "W sieci Wi-Fi z infrastrukturą zegar stacji synchronizuje ramka:", o: ["beacon wysyłana przez AP", "ACK", "RTS", "DHCP Offer"], a: [0], e: "W ad-hoc beacon może wysłać każda stacja." },
  { q: "Beamforming polega na:", o: [
    "skupianiu sygnału radiowego w kierunku konkretnego odbiorcy", "wysyłaniu sygnału we wszystkich kierunkach", "szyfrowaniu sygnału", "zmniejszaniu liczby anten"], a: [0], e: "Możliwy dzięki wielu elementom antenowym (MIMO)." },
  { q: "CMTS w DOCSIS to:", o: ["urządzenie po stronie dostawcy, do którego łączą się modemy kablowe", "modem u klienta", "przełącznik w domu", "ruter BGP"], a: [0], e: "Cable Modem Termination System; wysyła MAP z przydziałem mini-slotów." },
  { q: "Rozmowa telefoniczna to przykład komunikacji:", o: ["simplex", "half-duplex", "full-duplex", "multicast"], a: [2], e: "Obie strony mogą mówić jednocześnie." },
  { q: "Walkie-talkie (jeden mówi, drugi słucha) to przykład:", o: ["simplex", "half-duplex", "full-duplex", "multiplex"], a: [1], e: "Obie strony, ale naprzemiennie." },
  { q: "Które standardy Ethernetu wspierają full-duplex?", o: ["10BASE-T", "100BASE-TX", "1000BASE-T", "10BASE5"], a: [0, 1, 2], e: "Koncentryk (10BASE2, 10BASE5) – tylko half-duplex." },

  // --- warstwa 2 ---
  { q: "Przełącznik otrzymuje ramkę broadcast. Co robi?", o: [
    "wysyła na wszystkie porty oprócz tego, którym przyszła", "odrzuca ją", "wysyła tylko do rutera", "wysyła tylko do portu źródłowego"], a: [0], e: "Tak samo postępuje z ramką do nieznanego MAC (flood)." },
  { q: "Przełącznik nie zna adresu docelowego MAC ramki. Co robi?", o: ["odrzuca ramkę", "rozsyła ją na wszystkie porty oprócz wejściowego", "wysyła ARP", "wysyła do bramy"], a: [1], e: "Flood. Dopiero po odpowiedzi nauczy się portu." },
  { q: "STP (Spanning Tree Protocol) służy do:", o: [
    "wyłączania portów, aby w sieci przełączanej nie było pętli", "łączenia VLAN-ów", "przydzielania adresów IP", "agregacji łączy"], a: [0], e: "Tworzy drzewo bez cykli; zapasowe łącza włączają się po awarii." },
  { q: "VLAN wg 802.1Q oznacza ramki:", o: ["znacznikiem (tagiem) z numerem VLAN", "innym adresem MAC", "zmianą TTL", "dodatkowym adresem IP"], a: [0], e: "Tag dodawany jest do ramki, szczególnie na trunku." },
  { q: "Adres MAC broadcast to:", o: ["00-00-00-00-00-00", "FF-FF-FF-FF-FF-FF", "01-00-5E-00-00-01", "FE-80-00-00-00-00"], a: [1], e: "Same jedynki = do wszystkich w sieci lokalnej." },
  { q: "W IPv6 zamiast ARP używa się:", o: ["DHCPv6", "NDP (Neighbor Discovery Protocol)", "RIPng", "OSPFv3"], a: [1], e: "NDP działa na ICMPv6 (NS/NA)." },
  { q: "Odpowiedź na zapytanie ARP jest wysyłana jako:", o: ["broadcast", "unicast", "multicast", "anycast"], a: [1], e: "Zapytanie – broadcast, odpowiedź – zwykła ramka unicast." },
  { q: "Nagłówek MPLS leży:", o: ["między nagłówkami warstwy łącza i sieciowej („2,5”)", "przed nagłówkiem Ethernet", "w warstwie aplikacji", "za danymi"], a: [0], e: "Dlatego mówi się o warstwie 2,5." },
  { q: "Tablicę MAC (forwarding table) ma:", o: ["przełącznik", "serwer DNS", "tylko ruter", "serwer DHCP"], a: [0], e: "Tablicę ARP mają hosty i rutery." },

  // --- IPv4 ---
  { q: "Pole IHL w nagłówku IPv4 określa:", o: ["długość nagłówka w słowach 32-bitowych", "długość danych w bajtach", "liczbę fragmentów", "wersję protokołu"], a: [0], e: "IHL = 5 oznacza 20 B." },
  { q: "Flaga DF w IPv4 oznacza:", o: ["nie fragmentuj", "więcej fragmentów", "pakiet pilny", "droga źródłowa"], a: [0], e: "Jeśli pakiet nie mieści się w MTU, ruter go odrzuca i odsyła ICMP typ 3 kod 4." },
  { q: "Flaga MF = 0 oznacza, że fragment jest:", o: ["pierwszy", "ostatni", "uszkodzony", "z priorytetem"], a: [1], e: "MF = 1 – kolejne fragmenty jeszcze nadchodzą." },
  { q: "Maksymalna całkowita długość datagramu IPv4 to:", o: ["1500 B", "9000 B", "65 535 B", "4096 B"], a: [2], e: "Pole Total length ma 16 bitów." },
  { q: "Typowe MTU Ethernetu to:", o: ["576 B", "1280 B", "1500 B", "9000 B"], a: [2], e: "9000 to jumbo frame, 1280 to minimum dla IPv6." },
  { q: "Pole Identification w IPv4 służy do:", o: ["rozpoznawania fragmentów tego samego datagramu", "uwierzytelniania", "określania priorytetu", "wyboru trasy"], a: [0], e: "Fragmenty jednego datagramu mają to samo ID." },
  { q: "Kto odrzuca datagram z DF=1, który nie mieści się w MTU?", o: ["ruter, wysyłając ICMP typ 3 kod 4", "odbiorca", "przełącznik", "nadawca"], a: [0], e: "To mechanizm Path MTU Discovery." },
  { q: "Pola DSCP i ECN w IPv4 mają odpowiednio:", o: ["6 i 2 bity", "4 i 4 bity", "8 i 8 bitów", "2 i 6 bitów"], a: [0], e: "Razem jeden bajt (dawniej ToS)." },
  { q: "Adres 127.0.0.1 to:", o: ["loopback", "broadcast", "adres prywatny sieci domowej", "multicast"], a: [0], e: "Zakres 127.0.0.0/8; pakiet nie opuszcza hosta." },
  { q: "Adres z zakresu 169.254.0.0/16 host przyjmuje, gdy:", o: ["DHCP zawiedzie (link-local)", "jest w VPN", "ma publiczny adres", "korzysta z IPv6"], a: [0], e: "Samoprzydział; nigdy nie jest routowany." },
  { q: "Adres 255.255.255.255 to:", o: ["broadcast ograniczony – ruter go nie przekazuje", "adres sieci", "adres testowy", "multicast"], a: [0], e: "„Wszyscy w tym łączu”." },
  { q: "Klasa D (224–239) to:", o: ["multicast", "adresy prywatne", "klasa dla dużych sieci", "loopback"], a: [0], e: "Klasa E (240+) jest zarezerwowana." },
  { q: "Trasa 0.0.0.0/0 to:", o: ["trasa domyślna (wszystko inne)", "adres loopback", "sieć testowa", "broadcast"], a: [0], e: "Najkrótszy możliwy prefiks – wybierana, gdy nic bardziej szczegółowego nie pasuje." },
  { q: "Ile adresów hostów jest w podsieci /24?", o: ["256", "254", "255", "252"], a: [1], e: "256 − 2 (adres sieci i broadcast)." },
  { q: "Ile adresów hostów jest w podsieci /27?", o: ["32", "30", "28", "62"], a: [1], e: "2^5 − 2 = 30." },
  { q: "Ile adresów hostów jest w podsieci /30?", o: ["4", "2", "6", "1"], a: [1], e: "Typowa maska dla łącza punkt-punkt." },
  { q: "Maska /26 w zapisie dziesiętnym to:", o: ["255.255.255.192", "255.255.255.224", "255.255.255.128", "255.255.255.240"], a: [0], e: "26 jedynek: 8+8+8+2 → ostatni oktet 11000000 = 192." },
  { q: "Adres sieci dla hosta 192.168.5.130/26 to:", o: ["192.168.5.0", "192.168.5.64", "192.168.5.128", "192.168.5.192"], a: [2], e: "Bloki po 64: 0, 64, 128, 192. 130 leży w bloku od 128." },
  { q: "Adres broadcast dla 192.168.5.130/26 to:", o: ["192.168.5.191", "192.168.5.255", "192.168.5.129", "192.168.5.127"], a: [0], e: "Blok 128–191: adres sieci .128, broadcast .191." },
  { q: "200.20.10.0/24 podzielono VLSM na /25, /26, /27, /27. Trzecia podsieć to:", o: ["200.20.10.128/26", "200.20.10.192/27", "200.20.10.224/27", "200.20.10.64/26"], a: [1], e: "Kolejno: .0/25, .128/26, .192/27, .224/27." },
  { q: "Który adres może być adresem sieci /27?", o: ["200.20.10.192", "200.20.10.200", "200.20.10.210", "200.20.10.250"], a: [0], e: "Adres sieci musi być wielokrotnością wielkości bloku (32)." },
  { q: "Przy podziale /24 na cztery równe podsieci (FLSM) maska to:", o: ["/25", "/26", "/27", "/28"], a: [1], e: "Dwa dodatkowe bity → 4 podsieci po 64 adresy." },
  { q: "Prefiks 200.20.16.0/22 zawiera ile adresów?", o: ["256", "512", "1024", "2048"], a: [2], e: "2^(32−22) = 1024." },
  { q: "CIDR to:", o: [
    "bezklasowy routing: prefiks dowolnej długości, umożliwiający agregację", "podział na klasy A, B, C", "protokół routingu", "rodzaj NAT"], a: [0], e: "Zastąpił klasy A/B/C." },

  // --- ICMP, DHCP, NAT ---
  { q: "Które komunikaty ICMP odpowiadają za ping?", o: ["typ 8 (echo request) i typ 0 (echo reply)", "typ 3 i 11", "typ 5 i 12", "typ 13 i 14"], a: [0], e: "Typ 8 – zapytanie, typ 0 – odpowiedź." },
  { q: "ICMP typ 11 oznacza:", o: ["time exceeded (TTL = 0 lub timeout składania)", "cel nieosiągalny", "przekierowanie", "echo reply"], a: [0], e: "Na tym opiera się traceroute." },
  { q: "ICMP typ 3 oznacza:", o: ["destination unreachable", "time exceeded", "echo request", "redirect"], a: [0], e: "Kod 3 – port, kod 4 – wymagana fragmentacja." },
  { q: "Typ i kod w ICMP to odpowiednio:", o: [
    "kategoria komunikatu i jego szczegółowa przyczyna", "numer portu i numer protokołu", "TTL i priorytet", "adres źródłowy i docelowy"], a: [0], e: "Np. typ 3 (nieosiągalny), kod 3 (port)." },
  { q: "Porty DHCP serwer i klient to odpowiednio:", o: ["67 i 68", "68 i 67", "53 i 80", "520 i 521"], a: [0], e: "UDP 67 – serwer, UDP 68 – klient." },
  { q: "DHCP Discover jest wysyłane broadcastem, ponieważ:", o: [
    "klient nie ma jeszcze adresu IP i nie zna serwera", "to szybsze", "tak wymaga TCP", "serwer ma adres broadcast"], a: [0], e: "Źródło 0.0.0.0, cel 255.255.255.255." },
  { q: "Klient DHCP próbuje „rebind” (broadcast do dowolnego serwera) po:", o: ["50% dzierżawy", "75% dzierżawy", "87,5% dzierżawy", "100% dzierżawy"], a: [2], e: "T1 = 50% (do znanego serwera), T2 = 87,5% (do wszystkich)." },
  { q: "Które parametry może przekazać serwer DHCP?", o: ["maska podsieci", "brama domyślna", "serwer DNS", "adres MAC serwera WWW"], a: [0, 1, 2], e: "Plus czas dzierżawy (opcja 51)." },
  { q: "Która opcja DHCP mówi, o jaką wiadomość chodzi (Offer, Ack…)?", o: ["1", "3", "51", "53"], a: [3], e: "Opcja 53 = DHCP message type." },
  { q: "Przy wyjściu pakietu NAPT zmienia:", o: ["źródłowy adres IP i źródłowy port", "docelowy adres IP", "adres MAC docelowy", "TTL na 0"], a: [0], e: "Przy powrocie przepisuje docelowy IP i port." },
  { q: "NAT nie przyjmie połączenia przychodzącego, którego nie zainicjowano z wewnątrz, bo:", o: [
    "nie ma wpisu w tablicy tłumaczeń", "blokuje to protokół TCP", "adresy prywatne są routowane", "brak TTL"], a: [0], e: "Wpis powstaje przy ruchu wychodzącym i wygasa po czasie." },
  { q: "Powodem powstania NAT był:", o: ["niedobór adresów IPv4", "brak ARP", "wolne łącza", "wymóg szyfrowania"], a: [0], e: "Jeden adres publiczny dla wielu urządzeń." },
  { q: "Ile może być maksymalnie portów (na protokół, na adres publiczny) w NAPT?", o: ["256", "1024", "65 536", "4 294 967 296"], a: [2], e: "Port ma 16 bitów." },

  // --- IPv6 ---
  { q: "Długość adresu IPv6 to:", o: ["32 bity", "64 bity", "128 bitów", "256 bitów"], a: [2], e: "~3,4 × 10^38 adresów." },
  { q: "Adres ::1 w IPv6 to:", o: ["loopback", "adres nieokreślony", "multicast wszystkich węzłów", "link-local"], a: [0], e: "Odpowiednik 127.0.0.1. Adres :: to „nieokreślony”." },
  { q: "Adres :: (same zera) to:", o: ["adres nieokreślony (np. źródło w DAD)", "loopback", "adres domyślnej bramy", "broadcast"], a: [0], e: "Host używa go, gdy nie ma jeszcze adresu." },
  { q: "Prefiks FF00::/8 oznacza:", o: ["multicast", "link-local", "adresy globalne", "ULA"], a: [0], e: "IPv6 nie ma broadcastu, zastępuje go multicast." },
  { q: "Adresy globalne unicast IPv6 pochodzą z puli:", o: ["2000::/3", "FE80::/10", "FC00::/7", "FF00::/8"], a: [0], e: "Zaczynają się od 2 lub 3." },
  { q: "ULA w IPv6 (FC00::/7, w praktyce FD…) to odpowiednik:", o: ["adresów prywatnych IPv4", "adresów multicast", "loopback", "publicznych adresów"], a: [0], e: "Nie routowane w Internecie." },
  { q: "Prefiks 2001:db8::/32 jest zarezerwowany dla:", o: ["dokumentacji i przykładów", "multicastu", "adresów link-local", "dostawców"], a: [0], e: "RFC 3849 – nie routowany w Internecie." },
  { q: "Ile bitów ma identyfikator interfejsu w typowym adresie globalnym IPv6?", o: ["16", "32", "48", "64"], a: [3], e: "Reszta: 48 bitów prefiksu (45 + 3) i 16 bitów podsieci." },
  { q: "Ile podsieci /64 można utworzyć z prefiksu /48?", o: ["256", "4096", "65 536", "16 mln"], a: [2], e: "16 bitów identyfikatora podsieci → 2^16." },
  { q: "Anycast w IPv6 to:", o: [
    "ten sam adres na wielu węzłach; pakiet trafia do najbliższego", "wysyłanie do wszystkich", "wysyłanie do grupy zapisanych", "wysyłanie do jednego"], a: [0], e: "Przykład: serwery root DNS." },
  { q: "Next Header w IPv6 o wartości 6 oznacza:", o: ["TCP", "UDP", "ICMPv6", "ESP"], a: [0], e: "17 = UDP, 58 = ICMPv6, 43 = routing, 44 = fragment." },
  { q: "Next Header w IPv6 o wartości 58 oznacza:", o: ["ICMPv6", "TCP", "UDP", "OSPF"], a: [0], e: "W IPv4 ICMP miał numer 1." },
  { q: "Minimalne MTU łącza w IPv6 to:", o: ["576 B", "1280 B", "1500 B", "9000 B"], a: [1], e: "Nadawca nie powinien wysyłać mniejszych pakietów." },
  { q: "Który nagłówek rozszerzenia przetwarzany jest przez KAŻDY ruter na trasie?", o: ["Hop-by-Hop Options", "Routing", "Fragment", "ESP"], a: [0], e: "Pozostałe czytają tylko wskazane węzły lub odbiorca." },
  { q: "Ruter IPv6 nie rozumie wartości Next Header. Wysyła:", o: ["ICMPv6 Parameter Problem, kod 1", "ICMPv6 Packet Too Big", "ICMPv6 Echo Reply", "nic"], a: [0], e: "Kod 1 – nieznana wartość Next Header." },
  { q: "ICMPv6 Packet Too Big to typ:", o: ["1", "2", "3", "4"], a: [1], e: "1 – unreachable, 2 – too big, 3 – time exceeded, 4 – parameter problem." },
  { q: "Router Solicitation (RS) jest wysyłany na adres:", o: ["FF02::2 (wszystkie rutery)", "FF02::1", "FF02::5", "::1"], a: [0], e: "Router odpowiada RA (zwykle na FF02::1)." },
  { q: "Flaga M w Router Advertisement oznacza:", o: [
    "adresy przydziela DHCPv6", "inne ustawienia (np. DNS) z DHCPv6", "wyłącz SLAAC", "ruter jest domyślny"], a: [0], e: "Flaga O – inne ustawienia z DHCPv6." },
  { q: "SLAAC to konfiguracja:", o: ["bezstanowa – host sam tworzy adres z prefiksu RA", "stanowa – serwer prowadzi dzierżawy", "ręczna", "tylko IPv4"], a: [0], e: "DHCPv6 jest stanowe." },
  { q: "Adres solicited-node multicast tworzy się z:", o: ["ostatnich 24 bitów adresu unicast", "pierwszych 64 bitów", "adresu MAC bramy", "numeru portu"], a: [0], e: "FF02::1:FFxx:xxxx – tu NS dociera tylko do nielicznych hostów." },
  { q: "Neighbor Solicitation podczas rozwiązywania adresu wysyła się:", o: ["na adres solicited-node multicast", "na broadcast", "na FF02::1", "na loopback"], a: [0], e: "Odpowiedź NA jest unicastem." },
  { q: "W IPv6 NIE ma:", o: ["broadcastu", "multicastu", "anycastu", "unicastu"], a: [0], e: "Jego funkcję przejmuje multicast (np. FF02::1)." },
  { q: "IANA wyczerpała centralną pulę IPv4 w:", o: ["2001", "2006", "2011", "2019"], a: [2], e: "3 lutego 2011; ARIN – ostatni z RIR – we wrześniu 2015." },
  { q: "Router Advertisement zawiera m.in.:", o: ["prefiksy sieci i ich czasy życia", "adres MAC hosta", "tablicę ARP", "listę VLAN"], a: [0], e: "Plus flagi M/O, czas życia rutera, MTU." },

  // --- routing ---
  { q: "Routing statyczny w porównaniu z dynamicznym:", o: [
    "nie reaguje automatycznie na awarie, ale zużywa mało zasobów", "automatycznie wykrywa awarie", "wymaga protokołu RIP", "jest lepszy w dużych sieciach"], a: [0], e: "Dynamiczny: więcej CPU i pamięci, ale sam się adaptuje." },
  { q: "Wartość metryki RIP oznaczająca „nieosiągalne” to:", o: ["0", "15", "16", "255"], a: [2], e: "Maks. trasa ma 15 hopów." },
  { q: "Ruter RIP nie dostaje aktualizacji trasy przez 180 s. Co się dzieje?", o: [
    "trasa jest uznana za martwą (metryka 16)", "trasa jest usuwana natychmiast", "ruter restartuje się", "trasa zostaje bez zmian"], a: [0], e: "Potem jeszcze 120 s garbage collection." },
  { q: "Split horizon polega na tym, że ruter:", o: [
    "nie ogłasza trasy z powrotem do sąsiada, od którego ją poznał", "ogłasza trasy tylko raz", "usuwa najdłuższe trasy", "wysyła tablice tylko do DR"], a: [0], e: "Poison reverse: ogłasza ją, ale z metryką 16." },
  { q: "Poison reverse polega na:", o: [
    "odsyłaniu trasy do źródła z metryką 16", "usuwaniu trasy bez ogłoszenia", "wysyłaniu tablicy co sekundę", "blokowaniu aktualizacji"], a: [0], e: "Jawne ostrzeżenie „tędy nie idź”." },
  { q: "Triggered update w RIP:", o: [
    "jest wysyłany natychmiast po zmianie i zawiera tylko zmienione trasy", "jest wysyłany co 30 s", "zawiera całą tablicę", "zastępuje aktualizacje okresowe"], a: [0], e: "Działa razem z okresowymi aktualizacjami." },
  { q: "RIP używa:", o: ["UDP 520", "TCP 179", "IP protokół 89", "ICMP"], a: [0], e: "RIPng – UDP 521." },
  { q: "RIPng działa na UDP, port:", o: ["520", "521", "179", "89"], a: [1], e: "Multicast FF02::9." },
  { q: "RIPv1 w porównaniu z RIPv2:", o: [
    "nie przenosi maski podsieci (classful)", "używa IPv6", "obsługuje OSPF", "ma metrykę kosztu"], a: [0], e: "RIPv2 dodaje maskę, next hop i route tag." },
  { q: "Maksymalny rozmiar komunikatu RIPv2 to:", o: ["504 B", "1500 B", "576 B", "25 B"], a: [0], e: "4 B nagłówka + 25 wpisów × 20 B." },
  { q: "RIP jest uważany za wolno zbieżny, bo:", o: [
    "zmiany rozchodzą się z interwałami aktualizacji i może wystąpić counting to infinity", "używa Dijkstry", "ignoruje wszystkie zmiany", "wymaga DR"], a: [0], e: "Plus metryka hop count ignoruje przepustowość." },
  { q: "Ruter A ma sąsiadów: B (koszt 2, d(B,E)=7), C (koszt 1, d(C,E)=4), D (koszt 4, d(D,E)=3). Koszt A→E to:", o: ["5", "7", "9", "11"], a: [0], e: "Bellman-Ford: min(2+7, 1+4, 4+3) = 5 przez C." },
  { q: "Protokół link state to:", o: ["OSPF", "RIP", "RIPng", "BGP"], a: [0], e: "RIP i RIPng to distance vector." },
  { q: "Zbieżność protokołów link state w porównaniu z DV jest:", o: ["szybsza i bez pętli", "wolniejsza", "taka sama", "niemożliwa w dużych sieciach"], a: [0], e: "Kosztem większej ilości pamięci i CPU." },
  { q: "OSPF Hello wysyłane jest co (domyślnie, sieć broadcast):", o: ["5 s", "10 s", "30 s", "60 s"], a: [1], e: "Dead interval zwykle = 4 × hello (40 s)." },
  { q: "OSPF Dead interval to zwykle:", o: ["taki sam jak Hello", "2 × Hello", "4 × Hello", "10 × Hello"], a: [2], e: "Bez Hello w tym czasie sąsiad jest uznany za utracony." },
  { q: "Adres 224.0.0.6 w OSPF to:", o: ["AllDRouters (DR i BDR)", "AllSPFRouters", "RIPv2", "wszystkie hosty"], a: [0], e: "224.0.0.5 – wszystkie rutery OSPF." },
  { q: "Pakiet OSPF Database Description (DD) zawiera:", o: ["nagłówki LSA (lista „co mam”)", "pełne LSA", "prośbę o wybrane LSA", "potwierdzenie"], a: [0], e: "LSR – prośba, LSU – pełne LSA, LSAck – potwierdzenie." },
  { q: "Typ pakietu OSPF Hello to numer:", o: ["1", "2", "4", "5"], a: [0], e: "1 Hello, 2 DD, 3 LSR, 4 LSU, 5 LSAck." },
  { q: "Obszar 0 w OSPF to:", o: ["backbone (szkielet)", "obszar stub", "obszar NSSA", "obszar testowy"], a: [0], e: "Każdy obszar musi łączyć się z obszarem 0." },
  { q: "ABR w OSPF to ruter:", o: ["łączący dwa obszary i przekazujący streszczenia", "łączący OSPF ze światem zewnętrznym", "wybrany szef sieci lokalnej", "zapasowy DR"], a: [0], e: "ASBR – granica z zewnętrznym routingiem." },
  { q: "ASBR w OSPF to ruter:", o: ["wprowadzający do OSPF trasy z zewnątrz (spoza OSPF)", "łączący obszary", "wybrany szef sieci lokalnej", "zapasowy ruter"], a: [0], e: "Generuje LSA typu 5." },
  { q: "LSA typu 2 (Network LSA) tworzy:", o: ["DR", "każdy ruter", "ABR", "ASBR"], a: [0], e: "Opisuje sieć LAN i podłączone rutery." },
  { q: "LSA typu 3 (Summary) tworzy:", o: ["ABR", "DR", "ASBR", "każdy ruter"], a: [0], e: "Streszczenie sieci z innego obszaru." },
  { q: "LSA typu 1 (Router LSA) tworzy:", o: ["każdy ruter dla swoich łączy", "DR", "ABR", "ASBR"], a: [0], e: "Rozsyłany tylko w obrębie obszaru." },
  { q: "Obszar NSSA pozwala na:", o: ["ASBR wewnątrz obszaru (LSA typu 7, zamieniane na 5 przez ABR)", "brak LSA 1 i 2", "brak połączenia z obszarem 0", "wyłącznie trasy zewnętrzne"], a: [0], e: "Zwykły stub nie może mieć ASBR." },
  { q: "Totally stubby area dodatkowo blokuje LSA typu:", o: ["3", "1", "2", "7"], a: [0], e: "Zostaje jedna trasa domyślna." },
  { q: "OSPF odświeża LSA co (jeśli nie ma zmian) i usuwa po MaxAge:", o: ["30 min i 60 min", "30 s i 180 s", "10 s i 40 s", "5 min i 10 min"], a: [0], e: "Nie mylić z RIP (30/180/120 s)." },
  { q: "Który LSA jest nowszy?", o: ["ten z większym numerem sekwencyjnym", "ten z mniejszym numerem", "ten z większym kosztem", "ten od DR"], a: [0], e: "Ruter akceptuje i przekazuje tylko nowsze." },
  { q: "Preferencja tras w OSPF (od najlepszej):", o: [
    "wewnątrz obszaru, między obszarami, zewnętrzne", "zewnętrzne, między obszarami, wewnątrz obszaru", "między obszarami, wewnątrz obszaru, zewnętrzne", "wszystkie równe"], a: [0], e: "Trasa wewnątrz obszaru zawsze wygrywa." },
  { q: "E1 i E2 w OSPF: koszt E1 to:", o: ["metryka zewnętrzna + koszt do ASBR", "tylko metryka zewnętrzna", "tylko koszt do ASBR", "zawsze 1"], a: [0], e: "E2 (domyślny na Cisco) – tylko metryka zewnętrzna." },
  { q: "Koszt OSPF łącza 1 Gb/s przy referencji 100 Mb/s to:", o: ["0,1", "1", "10", "100"], a: [1], e: "Koszt nie spada poniżej 1, więc 100 Mb/s, 1 Gb/s i 10 Gb/s wyglądają tak samo." },
  { q: "OSPFv3 (dla IPv6) uwierzytelnia przez:", o: ["IPsec", "pole w nagłówku OSPF", "hasło RIP", "BGP"], a: [0], e: "W OSPFv2 uwierzytelnianie jest wbudowane w nagłówek." },
  { q: "LSDB w OSPF to:", o: ["baza z mapą (grafem) topologii obszaru", "tabela ARP", "lista sąsiadów", "tablica MAC"], a: [0], e: "Z niej ruter liczy Dijkstrą tablicę routingu." },
  { q: "Które protokoły są typu IGP (działają wewnątrz jednego AS)?", o: ["RIP", "OSPF", "BGP", "RIPng"], a: [0, 1, 3], e: "IGP – wewnątrz AS (RIP, RIPng, OSPF), EGP – między AS (BGP)." }
);
