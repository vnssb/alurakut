import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return(
    <Box>
      <img style={{ borderRadius: '8px'}}
      src={`https://github.com/${propriedades.githubUser}.png`}/>
    </Box>
  )
}

export default function Home() {
  const githubUser = 'vnssb';
  const favPeople = [
    'hersonls', 
    'willianjusten', 
    'marcobrunodev',
    'omariosouto',
    'peas',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">
              Bem vindo (a)
            </h1>

            <OrkutNostalgicIconSet />
          </Box>
        </div>

        <div className="profileRelationsArea" style={{ gridArea: "profileRelationsArea" }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade Dev ({favPeople.length})
            </h2>

            <ul>
              {favPeople.map((currentItem) => {
                return (
                  <li>
                    <a hrenf={`/users/${currentItem}`} key={currentItem}>
                      <img src={`https://github.com/${currentItem}.png`}/>
                      <span>{currentItem}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
