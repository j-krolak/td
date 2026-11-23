// a: indeksy poprawnych odpowiedzi; więcej niż jedna = "zaznacz wszystkie"
export const PYTANIA = [
  // --- z kolokwium 2021 ---
  { q: "Kodowanie Manchester to:", o: [
    "metoda kodowania, w której każdy bit ma co najmniej jedno przejście i zajmuje różny czas",
    "metoda kodowania, w której każdy bit ma co najmniej dwa przejścia i zajmuje różny czas",
    "metoda kodowania, w której każdy bit ma co najmniej jedno przejście i zajmuje ten sam czas",
    "wymaga osobnej linii synchronizacji zegara"], a: [2],
    e: "Przejście w środku każdego bitu, stały czas bitu. Jest samosynchronizujące – zegar odzyskuje się z sygnału." },
  { q: "Sekwencja wiadomości ICMPv6 odpowiadająca procedurze ARP to:", o: [
    "Router Solicitation (multicast), Router Advertisement (unicast)",
    "Router Solicitation (multicast), Router Advertisement (multicast)",
    "Neighbor Solicitation (multicast), Neighbor Advertisement (unicast)",
    "Neighbor Solicitation (multicast), Neighbor Advertisement (multicast)"], a: [2],
    e: "NS idzie na adres solicited-node (multicast), NA wraca unicastem. Typy 135 i 136." },
  { q: "Full-Duplex Ethernet:", o: [
    "umożliwia jednoczesną komunikację między wieloma stacjami",
    "wymaga segmentu punkt-punkt (skrętka, światłowód) dla niezależnych ścieżek nadawania i odbioru",
    "wymaga segmentu punkt-wielopunkt, np. drzewa światłowodowego PON",
    "umożliwia jednoczesną komunikację między parą stacji"], a: [1, 3],
    e: "Full-duplex dotyczy pary stacji i łącza punkt-punkt. Kolizje są wtedy niemożliwe." },
  { q: "Standard 802.1AX Link Aggregation umożliwia:", o: [
    "łączenie interfejsów Ethernet działających na różnych przepływnościach",
    "łączenie jednego lub więcej interfejsów Ethernet w jeden kanał logiczny",
    "osiągnięcie znacznie większej przepustowości sieci Wi-Fi",
    "przesłanie więcej niż 6 Gb/s przez sieć Wi-Fi"], a: [1],
    e: "LACP: N równoległych łączy full-duplex o tej samej przepływności tworzy jedno łącze logiczne." },
  { q: "W protokołach routingu typu Distance Vector rutery:", o: [
    "wymieniają się tablicami routingu z sąsiadami, a następnie używają algorytmu Dijkstry",
    "wykrywają topologię sieci, a następnie używają równania Bellmana-Forda",
    "wymieniają się tablicami routingu z sąsiadami, a następnie używają równania Bellmana-Forda",
    "wykrywają topologię sieci, a następnie używają algorytmu Dijkstry"], a: [2],
    e: "DV = Bellman-Ford + wymiana wektorów z sąsiadami (RIP). Link state = topologia + Dijkstra (OSPF)." },
  { q: "Rozproszona funkcja koordynacji (DCF) w 802.11:", o: [
    "to opcjonalna technika kontroli dostępu do medium standardu WLAN",
    "nakłada na stację wymaganie nasłuchiwania stanu kanału przez interwał DIFS przed wysłaniem pakietu",
    "wykorzystuje CSMA/CD bez binarnego wykładniczego algorytmu wycofywania",
    "wykorzystuje CSMA/CD z binarnym wykładniczym algorytmem wycofywania"], a: [1],
    e: "Wi-Fi używa CSMA/CA (nie CD). DCF jest podstawową metodą dostępu, opcjonalna jest PCF." },
  { q: "Do sieci dostępowych (Access networks) należą:", o: [
    "Bluetooth IEEE 802.15.1", "Serial ATA", "Ethernet LAN", "FTTH (Fibre to the House)"], a: [2, 3],
    e: "Bluetooth to sieć osobista, SATA to magistrala dysków." },
  { q: "Warstwa 3 modelu OSI przetwarza nagłówki:", o: ["HTTPS", "TCP", "IPv6", "Ethernet"], a: [2],
    e: "HTTPS – L7, TCP – L4, Ethernet – L2." },
  { q: "Protokół ARP:", o: [
    "mapuje adresy warstwy 3 (IPv4) na fizyczne adresy warstwy 2",
    "nie jest niezbędny i może zostać zastąpiony statycznymi wpisami w tablicy ARP",
    "zarządza tablicą ARP na przełączniku",
    "jest niezbędny i nie może zostać zastąpiony statycznymi wpisami"], a: [0],
    e: "Tablicę ARP mają hosty i rutery; przełącznik ma tablicę MAC. Odpowiedzi 1 i 3 są sporne – zaznacz tylko pewną." },
  { q: "Dla Ethernet 10Base2 procedura wycofywania (exponential backoff) działa tak, że:", o: [
    "Po i kolizjach wybierana jest losowa liczba szczelin między 0 a 2^i − 1",
    "Po i kolizjach wybierana jest losowa liczba szczelin między 1 a 2^i",
    "Po drugiej kolizji nadawcy czekają od 1 do 3 szczelin (włącznie)",
    "Po drugiej kolizji nadawcy czekają od 0 do 3 szczelin (włącznie)",
    "Po i kolizjach wybierana jest losowa liczba szczelin między 1 a 2^i − 1"], a: [0, 3],
    e: "1. kolizja: 0 lub 1; 2. kolizja: 0, 1, 2 lub 3." },
  { q: "Ruter IP przełącza pakiety w oparciu o:", o: [
    "źródłowy i docelowy adres IP", "docelowy adres IP oraz docelowy numer portu",
    "wyłącznie docelowy adres IP", "docelowy adres MAC"], a: [2], e: "Forwarding wg dst IP i longest prefix match." },

  // --- warstwy, Ethernet, Wi-Fi ---
  { q: "Który protokół transportowy zapewnia gwarancję dostarczenia i kontrolę przeciążenia?", o: ["UDP", "TCP", "IP", "ICMP"], a: [1], e: "TCP jest połączeniowy: retransmisje, kontrola przepływu i zatorów." },
  { q: "Jednostka danych warstwy łącza danych to:", o: ["segment", "datagram", "ramka", "bit"], a: [2], e: "Wiadomość → segment → datagram → ramka → bity." },
  { q: "Które urządzenia mają tylko warstwy 1–3 modelu?", o: ["host", "ruter", "przełącznik L2", "serwer"], a: [1], e: "Ruter: fizyczna, łącza, sieciowa. Przełącznik: 1–2." },
  { q: "Tryb komunikacji, w którym obie strony mogą nadawać, ale tylko naprzemiennie, to:", o: ["simplex", "half-duplex", "full-duplex", "multiplex"], a: [1], e: "Przykład: walkie-talkie." },
  { q: "Które medium NIE wspiera full-duplex?", o: ["10BASE-T", "10BASE2", "100BASE-TX", "1000BASE-T"], a: [1], e: "10BASE5 i 10BASE2 (koncentryk, magistrala) to half-duplex." },
  { q: "10GBASE-LR to:", o: [
    "światłowód wielomodowy, 850 nm", "światłowód jednomodowy, 1310 nm, do 10 km",
    "światłowód jednomodowy, 1550 nm, do 40 km", "skrętka do 100 m"], a: [1], e: "SR – MMF 850 nm; LR – SMF 1310 nm <10 km; ER – SMF 1550 nm <40 km; T – skrętka." },
  { q: "Po wykryciu kolizji w CSMA/CD stacja:", o: [
    "natychmiast retransmituje", "wysyła sygnał jam, czeka losowy czas backoff i ponawia próbę",
    "przerywa na stałe", "zmienia kanał"], a: [1], e: "Jam zapewnia, że wszyscy wykryją kolizję; po max liczbie prób nadawanie jest przerywane." },
  { q: "Problem ukrytego terminala w Wi-Fi rozwiązuje:", o: ["DHCP", "RTS/CTS", "STP", "ARP"], a: [1], e: "Stacje słyszą AP, ale nie siebie nawzajem; RTS/CTS rezerwuje kanał." },
  { q: "Który odstęp jest krótszy w 802.11?", o: ["DIFS", "SIFS", "są równe", "zależy od stacji"], a: [1], e: "SIFS < DIFS – ACK ma pierwszeństwo przed nowymi nadawaniami." },
  { q: "W DOCSIS rozdział upstreamu bez kolizji zapewnia:", o: ["CSMA/CD", "wiadomość MAP z CMTS przydzielająca mini-sloty", "RTS/CTS", "STP"], a: [1], e: "CMTS jawnie przydziela mini-sloty modemom." },

  // --- warstwa 2 ---
  { q: "Przełącznik Ethernet uczy się adresów MAC na podstawie:", o: ["adresu docelowego ramek", "adresu źródłowego ramek", "tablicy ARP", "pakietów DHCP"], a: [1], e: "Źródłowy MAC i port wejściowy trafiają do tablicy; nieznany cel → flood." },
  { q: "Dlaczego pętle w sieci przełączanej Ethernet są groźne?", o: [
    "bo ramka nie ma pola TTL i krąży w nieskończoność", "bo przełączniki nie znają MAC",
    "bo VLAN się wyłącza", "bo rośnie opóźnienie ARP"], a: [0], e: "Rozwiązanie: STP wyłącza część portów." },
  { q: "Zapytanie ARP jest wysyłane jako:", o: ["unicast", "broadcast (FF-FF-FF-FF-FF-FF)", "multicast IPv6", "anycast"], a: [1], e: "Odpowiedź ARP to zwykła ramka unicast." },
  { q: "Trunk między przełącznikami VLAN:", o: [
    "wymaga osobnego kabla dla każdego VLAN", "niesie wiele VLAN-ów po jednym łączu (znacznik 802.1Q)",
    "działa tylko w full-duplex 10G", "zastępuje STP"], a: [1], e: "802.1Q dodaje tag z identyfikatorem VLAN do ramki." },
  { q: "Adres MAC ma długość:", o: ["32 bity", "48 bitów", "64 bity", "128 bitów"], a: [1], e: "6 bajtów, 2^48 możliwych adresów." },
  { q: "Host chce wysłać pakiet. Wynik AND (maska, adres docelowy) ≠ numer jego podsieci. Co robi?", o: [
    "wysyła bezpośrednio", "wysyła do rutera (bramy domyślnej)", "wysyła broadcast", "odrzuca pakiet"], a: [1], e: "Równość = ta sama podsieć, dostarczenie bezpośrednie." },

  // --- IPv4 ---
  { q: "Minimalna długość nagłówka IPv4 to:", o: ["8 B", "20 B", "40 B", "60 B"], a: [1], e: "IHL = 5 słów po 32 bity. Z opcjami do 60 B." },
  { q: "Numer protokołu w nagłówku IPv4 dla UDP to:", o: ["1", "6", "17", "89"], a: [2], e: "1 ICMP, 6 TCP, 17 UDP, 89 OSPF." },
  { q: "Pole TTL w IPv4:", o: [
    "jest zegarem w sekundach", "jest zmniejszane o 1 na każdym ruterze; przy 0 pakiet jest odrzucany",
    "jest zwiększane na każdym hopie", "jest używane przez ARP"], a: [1], e: "Przy 0 ruter wysyła ICMP typ 11 (time exceeded)." },
  { q: "Datagram 4000 B (20 B nagłówek) przechodzi przez łącze z MTU 1500. Offset trzeciego fragmentu to:", o: ["185", "370", "1480", "2960"], a: [1], e: "Fragmenty: 1480 B (offset 0), 1480 B (offset 185), 1020 B (offset 370, MF=0). Offset w jednostkach po 8 B." },
  { q: "Fragmenty datagramu IPv4 składa:", o: ["każdy ruter na ścieżce", "ostatni ruter", "tylko odbiorca", "nadawca"], a: [2], e: "Rutery tylko fragmentują i przekazują." },
  { q: "Ile adresów hostów jest dostępnych w podsieci /26?", o: ["64", "62", "30", "126"], a: [1], e: "2^6 − 2 (adres sieci i broadcast zarezerwowane)." },
  { q: "Które zakresy są prywatne (RFC 1918)?", o: ["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "100.64.0.0/10"], a: [0, 1, 2], e: "100.64.0.0/10 to wspólna przestrzeń dla CGNAT (RFC 6598)." },
  { q: "Tablica ma: 200.20.16.0/22 → eth0 oraz 200.20.19.0/24 → eth2. Pakiet do 200.20.19.7 wyjdzie przez:", o: ["eth0", "eth2", "oba", "zostanie odrzucony"], a: [1], e: "Longest prefix match: /24 jest dłuższy niż /22." },
  { q: "Które cztery sieci /24 agregują się w jeden prefiks 200.20.16.0/22?", o: [
    "200.20.16.0 – 200.20.19.0", "200.20.16.0 – 200.20.20.0", "200.20.15.0 – 200.20.18.0", "200.20.17.0 – 200.20.20.0"], a: [0], e: "/22 = 1024 adresów, adres sieci podzielny przez 4 w 3. oktecie." },

  // --- ICMP, DHCP, NAT ---
  { q: "ICMP typ 3 kod 4 oznacza:", o: ["port unreachable", "fragmentation needed and DF set", "TTL exceeded", "echo reply"], a: [1], e: "To mechanizm Path MTU Discovery." },
  { q: "Traceroute (Linux) wie, że dotarł do celu, bo cel odpowiada:", o: ["ICMP typ 11", "ICMP typ 3 kod 3 (port unreachable)", "TCP RST", "ICMP typ 5"], a: [1], e: "Wysyła UDP na wysoki port. Rutery po drodze odpowiadają typem 11." },
  { q: "Kolejność wiadomości DHCP to:", o: ["Discover, Offer, Request, Ack", "Request, Offer, Discover, Ack", "Offer, Discover, Ack, Request", "Discover, Request, Offer, Ack"], a: [0], e: "DORA. Serwer UDP 67, klient UDP 68." },
  { q: "Klient DHCP odnawia dzierżawę (T1) po:", o: ["12,5% czasu", "50% czasu", "87,5% czasu", "100% czasu"], a: [1], e: "T1 = 50% (unicast), T2 = 87,5% (broadcast/rebind)." },
  { q: "NAPT (PAT) rozróżnia wiele hostów za jednym adresem publicznym przy pomocy:", o: ["adresów MAC", "numerów portów", "TTL", "VLAN"], a: [1], e: "Tablica: publiczny adres:port ↔ prywatny adres:port." },
  { q: "NAT jest mechanizmem bezpieczeństwa (firewallem).", o: ["Prawda", "Fałsz"], a: [1], e: "Ukrywanie topologii to efekt uboczny; NAT niczego nie uwierzytelnia ani nie filtruje." },

  // --- IPv6 ---
  { q: "Długość stałego nagłówka IPv6 to:", o: ["20 B", "32 B", "40 B", "128 B"], a: [2], e: "Opcje przeniesiono do nagłówków rozszerzeń." },
  { q: "Czego NIE ma w nagłówku IPv6 (w porównaniu z IPv4)?", o: ["sumy kontrolnej nagłówka", "IHL", "pól fragmentacji", "adresu źródłowego"], a: [0, 1, 2], e: "Fragmentacja – w nagłówku rozszerzenia (tylko źródło)." },
  { q: "Odpowiednikiem TTL w IPv6 jest:", o: ["Flow Label", "Hop Limit", "Next Header", "Traffic Class"], a: [1], e: "Next Header zastępuje pole Protocol." },
  { q: "Kto fragmentuje pakiety IPv6?", o: ["każdy ruter", "tylko nadawca", "tylko odbiorca", "nikt, fragmentacja nie istnieje"], a: [1], e: "Ruter odrzuca za duży pakiet i wysyła ICMPv6 Packet Too Big (typ 2). Minimalne MTU to 1280." },
  { q: "Adres link-local IPv6 mieści się w prefiksie:", o: ["FC00::/7", "FE80::/10", "FF02::/16", "2000::/3"], a: [1], e: "FC00::/7 – ULA, FF – multicast, 2000::/3 – global unicast." },
  { q: "Który adres IPv6 jest multicastem „wszystkie rutery w łączu”?", o: ["FF02::1", "FF02::2", "FF02::5", "FE80::2"], a: [1], e: "FF02::1 – wszystkie węzły, FF02::5 – OSPFv3, FF02::9 – RIPng." },
  { q: "Typy ICMPv6 dla NS i NA to:", o: ["133 i 134", "135 i 136", "128 i 129", "137 i 138"], a: [1], e: "133 RS, 134 RA, 135 NS, 136 NA, 137 Redirect, 128/129 echo." },
  { q: "Duplicate Address Detection (DAD) wysyła Neighbor Solicitation z adresem źródłowym:", o: ["adresem rutera", "adresem testowanym", "nieokreślonym (::)", "FF02::1"], a: [2], e: "Host nie ma jeszcze użytecznego adresu. Odpowiedź NA oznacza duplikat." },
  { q: "SLAAC: adres globalny hosta powstaje z:", o: [
    "prefiksu z Router Advertisement i identyfikatora interfejsu", "adresu przydzielonego przez serwer DHCPv6 (zawsze)",
    "adresu IPv4", "adresu rozgłoszeniowego"], a: [0], e: "Flaga M w RA oznacza użycie DHCPv6 dla adresów, O dla pozostałych ustawień." },
  { q: "Identyfikator EUI-64 dla MAC 00:1A:2B:3C:4D:5E to:", o: [
    "001A:2BFF:FE3C:4D5E", "021A:2BFF:FE3C:4D5E", "021A:2B3C:4D5E:FFFE", "001A:2B3C:4D5E:0000"], a: [1], e: "Wstaw FF:FE w środek i odwróć bit U/L pierwszego bajtu (00 → 02)." },
  { q: "Poprawny zapis skrócony adresu 2001:0db8:0000:0000:0000:ff00:0042:8329 to:", o: [
    "2001:db8::ff00:42:8329", "2001:db8:0:0:0:ff00:42:8329 jest jedynym poprawnym", "2001::db8::ff00:42:8329", "2001:db8::ff:42:8329"], a: [0], e: "Dozwolone tylko jedno „::”. Wiodące zera można pominąć." },

  // --- routing ---
  { q: "Metryka RIP to:", o: ["przepustowość", "liczba hopów (max 15)", "opóźnienie", "koszt z przepustowości"], a: [1], e: "16 oznacza nieosiągalne." },
  { q: "Timery RIP (update / timeout / garbage collection) to:", o: ["30 / 180 / 120 s", "10 / 40 / 120 s", "30 / 120 / 180 s", "60 / 180 / 30 s"], a: [0], e: "Update co 30 s (±5 s jitter)." },
  { q: "Które mechanizmy ograniczają zjawisko counting to infinity w RIP?", o: ["split horizon", "poison reverse", "triggered updates", "DR/BDR"], a: [0, 1, 2], e: "DR/BDR to element OSPF." },
  { q: "RIPv2 wysyła aktualizacje na adres:", o: ["224.0.0.5", "224.0.0.9", "224.0.0.6", "255.255.255.255"], a: [1], e: "UDP 520. 224.0.0.5/6 to OSPF." },
  { q: "OSPF jest przenoszony przez:", o: ["UDP 520", "TCP 179", "bezpośrednio IP (protokół 89)", "ICMP"], a: [2], e: "BGP używa TCP 179." },
  { q: "OSPF wybiera DR na podstawie:", o: [
    "najwyższego priorytetu, a przy remisie najwyższego Router ID", "najniższego Router ID", "najwyższego adresu MAC", "kolejności startu"], a: [0], e: "Priorytet 0 = ruter nigdy nie zostanie DR." },
  { q: "Pakiet OSPF, który nosi pełne LSA w procesie flooding, to:", o: ["Hello", "Database Description", "Link State Request", "Link State Update"], a: [3], e: "1 Hello, 2 DD, 3 LSR, 4 LSU, 5 LSAck." },
  { q: "LSA typu 5 (AS External) jest generowane przez:", o: ["każdy ruter", "DR", "ABR", "ASBR"], a: [3], e: "ABR generuje typy 3 i 4, DR typ 2, każdy ruter typ 1." },
  { q: "Które LSA są blokowane w obszarze stub?", o: ["typ 1", "typ 2", "typ 5", "typ 4"], a: [2, 3], e: "ABR wstrzykuje trasę domyślną. Totally stubby blokuje też typ 3." },
  { q: "Które parametry muszą się zgadzać, aby dwa rutery OSPF utworzyły adjacency?", o: ["Area ID", "interwały Hello i Dead", "maska sieci", "Router ID"], a: [0, 1, 2], e: "Router ID musi być unikalny, nie taki sam." },
  { q: "Który algorytm stosuje OSPF?", o: ["Bellman-Ford", "Dijkstra (SPF)", "Floyd-Warshall", "Prim"], a: [1], e: "Link state = pełna topologia + Dijkstra." },
  { q: "Domyślny koszt OSPF dla łącza 10 Mb/s przy referencji 100 Mb/s to:", o: ["1", "10", "100", "50"], a: [1], e: "100/10 = 10. Łącza ≥100 Mb/s mają koszt 1." },
  { q: "Który protokół jest typu EGP?", o: ["RIP", "OSPF", "BGP", "RIPng"], a: [2], e: "BGP łączy autonomiczne systemy (AS)." },
  { q: "Autonomous System to według RFC 1930:", o: [
    "grupa prefiksów IP z jedną, jasno określoną polityką routingu", "pojedynczy ruter",
    "dowolna sieć LAN", "sieć jednego kraju"], a: [0], e: "Numerowany ASN, np. AS8890 (UW)." }
];
