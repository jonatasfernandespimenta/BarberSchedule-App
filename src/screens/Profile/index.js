import React from 'react';
import { Button, ScrollView, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Background, Container, PfPContainer, Row, Text, Column, Categorie, WeekDay, CalendarContainer, Schedule, Hr } from './styles';
import { useNavigation } from '@react-navigation/native';
import adjust from '../../utils/responsivity';

const Profile = () => {
  const navigation = useNavigation();

  const weeks = [
    {name: 'SEG', day: '01'}, {name: 'TER', day: '02'}, 
    {name: 'QUA', day: '03'}, {name: 'QUI', day: '04'} ,{name: 'SEX', day: '05'} ,
    {name: 'SAB', day: '06'}, {name: 'DOM', day: '07'}
  ];

  return(
    <Background colors={['#965C2790', '#26180B']}>
      <ScrollView>
      <Container>
        <Row>
          <PfPContainer/>
          <Column>
            <Text size={16}>Roberto D. Steven | Zeor</Text>
            <Text size={14}>Aberto das: 06h - 20h</Text>
          </Column>
        </Row>

        <Row>
          <Text size={12}>Rua Coronel Amancio Bueno - 495</Text>
          <Icon name="map-marker" color="white" size={20} style={{ marginLeft: 10 }} />
        </Row>

        <Row>
          <Categorie>
            <Text>BARBA</Text>
          </Categorie>

          <Categorie>
            <Text>CABELO</Text>
          </Categorie>

          <Categorie>
            <Text>SOMBRANCELHA</Text>
          </Categorie>
        </Row>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />

          <View>
            <Text style={{width: 55, textAlign: 'center'}}>Horarios</Text>
          </View>
          
          <View style={{flex: 1, height: 1, backgroundColor: 'white'}} />
        </View>

        <CalendarContainer>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity>
              <Icon name="chevron-left" color='white' size={25} />
            </TouchableOpacity>

            <Text style={{ fontSize: 20 }}>Setembro</Text>

            <TouchableOpacity>
              <Icon name="chevron-right" color='white' size={25} />
            </TouchableOpacity>
          </View>

          <Row>
            <TouchableOpacity>
              <Icon name="chevron-left" color='white' size={25} />
            </TouchableOpacity>
            {
              weeks.map(week => (
                <WeekDay>
                  <Text style={{ fontSize: adjust(14), fontWeight: 'bold' }}>{week.name}</Text>
                  <Text style={{ fontSize: adjust(14), fontWeight: 'bold' }}>{week.day}</Text>
                </WeekDay>
              ))
            }
            <TouchableOpacity>
              <Icon name="chevron-right" color='white' size={25} />
            </TouchableOpacity>

            <Hr style={{ marginTop: 10 }} />
            {
              weeks.map(x => (
                <>
                <Text style={{ fontSize: 12, fontWeight: 'bold', marginRight: 15 }}>09:00</Text>

                <Schedule>
                  <Text size={14} style={{ fontWeight: 'bold' }} >09:00 - 09:30</Text>

                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flexDirection: 'column' }}>
                      <Text size={16} style={{ fontWeight: 'bold', marginTop: 25 }} >Carlos</Text>
                      <Text size={14} style={{ marginTop: 2 }}>Corte de cabelo</Text>
                    </View>

                    <Text size={14} style={{ marginTop: 47 }}>R$ 22,00</Text>
                  </View>
                </Schedule>
                <Hr/>
                </>
              ))
            }
          </Row>
        </CalendarContainer>

      </Container>
      </ScrollView>
    </Background>
  );
}

export default Profile;
