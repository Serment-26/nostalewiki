import '../style/header.css';

export default function Header(){
    return(
        <header>
            
            <ul>
                <li><img onClick={()=> window.open('https://forum.gamer.com.tw/C.php?bsn=10995&snA=43735','_blank')} src="https://truth.bahamut.com.tw/s01/202105/182f7b66408f6ad87b9c70d06da30316.JPG" alt="logo"/></li>
                <li><a herf="#hi">Specialist</a></li>
                <li><a href="https://docs.google.com/spreadsheets/d/17iUfgd63jeUynL_kllOu5vnlDYZ5Puel/edit?usp=sharing&ouid=113105389545603828192&rtpof=true&sd=true">Tower reward</a></li>
            </ul>
        </header>
    )
}
