import 'bootstrap/dist/css/bootstrap.min.css';
import Officer from './components/Officer'
import YearNav from './components/YearNavigation';
import OFFICERIMAGES from './img/Officers';

function App() {

  return (
    <div>
    <YearNav></YearNav>
    <div class="container justify-content-center">
        <div class="row">
          <Officer officerName="Melina Perraut"
                  officerPic={OFFICERIMAGES.officerTeam2022.melinaPerraut2}
                  officerPosition="Co-President"
          />
          <Officer officerName="Roshni Srikanth"
                  officerPic={OFFICERIMAGES.officerTeam2022.roshniSrikanth2}
                  officerPosition="Co-President"
          />
          <Officer officerName="Bhavya Garlapati"
                  officerPic={OFFICERIMAGES.officerTeam2022.bhavyaGarlapati}
                  officerPosition="Director of Finance"
          />
        </div>
        <div class="row">
          <Officer officerName="Lucy Lin"
                  officerPic={OFFICERIMAGES.officerTeam2022.lucyLin}
                  officerPosition="Co-President"
          />
          <Officer officerName="Kelly Wang"
                  officerPic={OFFICERIMAGES.officerTeam2022.kellyWang}
                  officerPosition="Co-President"
          />
          <Officer officerName="Alyssa Vo"
                  officerPic={OFFICERIMAGES.officerTeam2022.alyssaVo}
                  officerPosition="Director of Finance"
          />
        </div>
        <div class="row">
          <Officer officerName="Bandhna Bedi"
                  officerPic={OFFICERIMAGES.officerTeam2022.bandhnaBedi}
                  officerPosition="Director of Diversity Efforts"
          />
          <Officer officerName="Kayla Tounaloum"
                  officerPic={OFFICERIMAGES.officerTeam2022.kaylaTounaloum}
                  officerPosition="Director of Community Efforts"
          />
          <Officer officerName="Emiri Nishizawa"
                  officerPic={OFFICERIMAGES.officerTeam2022.emiriNishizawa}
                  officerPosition="Hackathon Director"
          />
        </div>
    </div>
    </div>


  );
}

export default App;
