import 'bootstrap/dist/css/bootstrap.min.css';
import Officer from './components/Officer'
import YearNav from './components/YearNavigation';
import OfficerYear from './components/OfficerYear';
import OFFICERIMAGES from './img/Officers';
import './index.css';

function App() {

  return (
    <div>
        <YearNav></YearNav>
        <section id="current" class="border-top">
            <OfficerYear year="2022-2021"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
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
                <div class="row" id="officer-row">
                    <Officer officerName="Lucy Lin"
                            officerPic={OFFICERIMAGES.officerTeam2022.lucyLin}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Kelly Wang"
                            officerPic={OFFICERIMAGES.officerTeam2022.kellyWang}
                            officerPosition="Creative Director"
                    />
                    <Officer officerName="Alyssa Vo"
                            officerPic={OFFICERIMAGES.officerTeam2022.alyssaVo}
                            officerPosition="Director of Public Relations"
                    />
                </div>
                <div class="row" id="officer-row">
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
        </section>

        <section id="o2021-22" class="border-top">
            <OfficerYear year="2021-2022"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Allison Geary"
                            officerPic={OFFICERIMAGES.officerTeam2021.allisonGeary3}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Kayla Chea"
                            officerPic={OFFICERIMAGES.officerTeam2021.kaylaChea2}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Rachel Kinkley"
                            officerPic={OFFICERIMAGES.officerTeam2021.rachelKinkley2}
                            officerPosition="Director of Finance"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Melina Perraut"
                            officerPic={OFFICERIMAGES.officerTeam2021.melinaPerraut}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Dana Rin"
                            officerPic={OFFICERIMAGES.officerTeam2021.danaRin}
                            officerPosition="Creative Director"
                    />
                    <Officer officerName="Sam Rondini"
                            officerPic={OFFICERIMAGES.officerTeam2021.samRondini}
                            officerPosition="Director of Public Relations"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Roshni Srikanth"
                            officerPic={OFFICERIMAGES.officerTeam2021.roshniSrikanth}
                            officerPosition="Director of Diversity Efforts"
                    />
                    <Officer officerName="Gisele Fox"
                            officerPic={OFFICERIMAGES.officerTeam2021.giseleFox}
                            officerPosition="Director of Community Efforts"
                    />
                    <Officer officerName="Sharon Lin"
                            officerPic={OFFICERIMAGES.officerTeam2021.sharonLin}
                            officerPosition="Hackathon Director"
                    />
                </div>
            </div>
        </section>
        <section id="o2020-21" class="border-top">
            <OfficerYear year="2020-2021"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Allison Geary"
                            officerPic={OFFICERIMAGES.officerTeam2020.allisonGeary2}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Akoly Vongdala"
                            officerPic={OFFICERIMAGES.officerTeam2020.akolyVongdala2}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Lynzley Kolakowski"
                            officerPic={OFFICERIMAGES.officerTeam2020.lynzleyKolakowski}
                            officerPosition="Director of Finance"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Julia Shull"
                            officerPic={OFFICERIMAGES.officerTeam2020.juilaShull}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Kayla Chea"
                            officerPic={OFFICERIMAGES.officerTeam2020.kaylaChea}
                            officerPosition="Creative Director"
                    />
                    <Officer officerName="Shareen Chang"
                            officerPic={OFFICERIMAGES.officerTeam2020.shareenChang}
                            officerPosition="Director of Public Relations"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Harkiran Saluja"
                            officerPic={OFFICERIMAGES.officerTeam2020.harkiranSaluja2}
                            officerPosition="Director of Diversity Efforts"
                    />
                    <Officer officerName="Rachel Kinkley"
                            officerPic={OFFICERIMAGES.officerTeam2020.rachelKinkley}
                            officerPosition="Director of Community Efforts"
                    />
                    <Officer officerName="Locksley Kolakowski"
                            officerPic={OFFICERIMAGES.officerTeam2020.locksleyKolakowski}
                            officerPosition="Hackathon Director"
                    />
                </div>
            </div>
        </section>
        <section id="o2019-20" class="border-top">
            <OfficerYear year="2019-2020"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Hayley Younghusband"
                            officerPic={OFFICERIMAGES.officerTeam2019.hayleyYounghusband}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Autumn Derr"
                            officerPic={OFFICERIMAGES.officerTeam2019.autumnDerr}
                            officerPosition="Co-President"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Rhea Chen"
                            officerPic={OFFICERIMAGES.officerTeam2019.rheaChen}
                            officerPosition="Director of Finance"
                    />
                    <Officer officerName="Jeongvin Yeom"
                            officerPic={OFFICERIMAGES.officerTeam2019.jeongvinYeom}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Harkiran Saluja"
                            officerPic={OFFICERIMAGES.officerTeam2019.harkiranSaluja}
                            officerPosition="Creative Director"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Allison Geary"
                            officerPic={OFFICERIMAGES.officerTeam2019.allisonGeary}
                            officerPosition="Director of Public Relations"
                    />
                    <Officer officerName="Eva Perez"
                            officerPic={OFFICERIMAGES.officerTeam2019.evaPerez}
                            officerPosition="Director of Diversity"
                    />
                    <Officer officerName="Akoly Vongdala"
                            officerPic={OFFICERIMAGES.officerTeam2019.akolyVongdala}
                            officerPosition="Hackathon Project Manager"
                    />
                </div>
            </div>
        </section>
        <section id="o2018-19" class="border-top">
            <OfficerYear year="2018-2019"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Stephanie Burd"
                            officerPic={OFFICERIMAGES.officerTeam2018.stephanieBurd}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="August Carow"
                            officerPic={OFFICERIMAGES.officerTeam2018.augustCarow}
                            officerPosition="Co-President"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="ZK Lin"
                            officerPic={OFFICERIMAGES.officerTeam2018.zkLin}
                            officerPosition="Director of Finance"
                    />
                    <Officer officerName="Alexis Choi"
                            officerPic={OFFICERIMAGES.officerTeam2018.alexisChoi}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Echo Zhang"
                            officerPic={OFFICERIMAGES.officerTeam2018.echoZhang}
                            officerPosition="Creative Director"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Mary Huibregtse"
                            officerPic={OFFICERIMAGES.officerTeam2018.maryHuibregtse}
                            officerPosition="Director of Public Relations"
                    />
                    <Officer officerName="Harshitha Akkaraju"
                            officerPic={OFFICERIMAGES.officerTeam2018.harshithaAkkaraju}
                            officerPosition="Director of Diversity"
                    />
                </div>
            </div>
        </section>
        <section id="o2017-18" class="border-top">
            <OfficerYear year="2017-2018"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Tiffany Chen"
                            officerPic={OFFICERIMAGES.officerTeam2017.tiffanyChen}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Joycie Yu"
                            officerPic={OFFICERIMAGES.officerTeam2017.joycieYu}
                            officerPosition="Co-President"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Zhanna Voloshina"
                            officerPic={OFFICERIMAGES.officerTeam2017.zhannaVoloshina}
                            officerPosition="Director of Finance"
                    />
                    <Officer officerName="Jenny Lee"
                            officerPic={OFFICERIMAGES.officerTeam2017.jennyLee}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Leanne Hwa"
                            officerPic={OFFICERIMAGES.officerTeam2017.leanneHwa}
                            officerPosition="Creative Director"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Andrea Chen"
                            officerPic={OFFICERIMAGES.officerTeam2017.andreaChen}
                            officerPosition="Director of Public Relations"
                    />
                    <Officer officerName="Anushree Shukla"
                            officerPic={OFFICERIMAGES.officerTeam2017.anushreeShukla}
                            officerPosition="Director of Diversity"
                    />
                </div>
            </div>
        </section>
        <section id="o2016-17" class="border-top">
            <OfficerYear year="2016-2017"></OfficerYear>
            <div class="container">
                <div class="row" id="officer-row">
                    <Officer officerName="Brittney Hoy"
                            officerPic={OFFICERIMAGES.officerTeam2017.tiffanyChen}
                            officerPosition="Co-President"
                    />
                    <Officer officerName="Sanjana Galgalikar"
                            officerPic={OFFICERIMAGES.officerTeam2017.joycieYu}
                            officerPosition="Co-President"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Fan Yang"
                            officerPic={OFFICERIMAGES.officerTeam2016.fanYang}
                            officerPosition="Director of Finance"
                    />
                    <Officer officerName="Isabella Spaletta"
                            officerPic={OFFICERIMAGES.officerTeam2016.isabellaSpaletta}
                            officerPosition="Director of Outreach"
                    />
                    <Officer officerName="Sophie Song"
                            officerPic={OFFICERIMAGES.officerTeam2016.sophieSong}
                            officerPosition="Creative Director"
                    />
                </div>
                <div class="row" id="officer-row">
                    <Officer officerName="Adriana Vining"
                            officerPic={OFFICERIMAGES.officerTeam2016.adrianaVining}
                            officerPosition="Director of Public Relations"
                    />
                    <Officer officerName="Jessie Zhang"
                            officerPic={OFFICERIMAGES.officerTeam2016.jessieZhang}
                            officerPosition="Director of Diversity"
                    />
                </div>
            </div>
        </section>
    </div>


  );
}

export default App;
