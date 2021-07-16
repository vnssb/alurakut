import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSideBar(propriedades){
  return(
    <Box as="aside">
      <img style={{ borderRadius: '8px'}}
      src={`https://github.com/${propriedades.githubUser}.png`}/>
      <hr/>
      <p>
        <a className="boxLink" hrenf={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr/>

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

{ /* Followers */ }
function ProfileRelationsBox(propriedades){
  return(
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {followers.map((currentItem) => {
          return (
            <li key={currentItem}>
              <a hrenf={`https://github.com/${currentItem}`}>
                <img src={`https://github.com/${currentItem}.png`} />
                <span>{currentItem.title}</span>
              </a>
            </li>
          );
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const githubUser = 'vnssb';
  const [communities, setCommunities] = React.useState([
    {
      id: '1',
      title: "Before I Forget",
      image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/724cf1a2-d555-4972-bccb-89a6d58e400d/d32kjz9-3520b524-2b41-4afb-b064-e0a71a0a28a3.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcyNGNmMWEyLWQ1NTUtNDk3Mi1iY2NiLTg5YTZkNThlNDAwZFwvZDMya2p6OS0zNTIwYjUyNC0yYjQxLTRhZmItYjA2NC1lMGE3MWEwYTI4YTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.S_DYqRqxdMZwYqqTiL1MjXWaith7xsOflgyYujYlKfE",
    },
    {
      id: '2',
      title: "Viva o SUS",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVDbjugWkMq9uh2OeJ6UzUxDTlPDNnbX3jw&usqp=CAU",
    },
    {
      id: '3',
      title: "Fora Bolsonaro",
      image: "https://i.pinimg.com/originals/58/d2/f9/58d2f9a4aa5d01b328364dfde2891cb5.jpg",
    },
  ]);
  // const communities = communities[0];
  // const setCommunities = communities[1];
  // const communities = ['Alurakut'];
  const favPeople = [
    'hersonls', 
    'sibelius',
    'mojombo',
    'willianjusten', 
    'marcobrunodev',
    'omariosouto'
  ]
  const [followers, setFollowers] = React.useState([]);
  React.useEffect(function() {
    fetch("https://api.github.com/users/mojombo/followers")
    .then(function (serverAnswer) {
      return serverAnswer.json();
    })
    .then(function(completeAnswer){
      setFollowers(completeAnswer);
    })
  }, [])

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <ProfileSideBar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <Box>
            <h1 className="title">Bem-vinda, Van</h1>

            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                const community = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get("title"),
                  image: dadosDoForm.get("image"),
                };
                const communitiesAtt = [...communities, community];
                setCommunities(communitiesAtt);
              }}
            >
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>Criar Comunidade</button>
            </form>
          </Box>
        </div>

        <div className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}>
          
          { /* Followers */ }
          <ProfileRelationsBox title="Followers" items={followers} />

          {/* Tech Community People */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Tech Community People ({favPeople.length})
            </h2>
            <ul>
              {favPeople.map((currentItem) => {
                return (
                  <li key={currentItem}>
                    <a hrenf={`/users/${currentItem}`}>
                      <img src={`https://github.com/${currentItem}.png`} />
                      <span>{currentItem}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          
          {/* Communities */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Communities ({communities.length})</h2>
            <ul>
              {communities.map((currentItem) => {
                return (
                  <li key={currentItem.id}>
                    <a hrenf={`/users/${currentItem.title}`}>
                      <img src={currentItem.image} />
                      <span>{currentItem.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
};
