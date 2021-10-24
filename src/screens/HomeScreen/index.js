import React, {useContext, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import setList from './setList';
import {loadAPIData} from '../../redux/actions/APIAction';
import {connect, useDispatch, useSelector} from 'react-redux';
import {CustomAlert} from '../../utils/Dialogs';

const HomeScreen = () => {
  const [responseData, setResponseData] = useState({});
  const [selectedData, setSelectedData] = useState(undefined);
  const dispatch = useDispatch();
  const [isAlertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    dispatch(loadAPIData(data => {
      setResponseData(data);
    }));
  }, []);
  useEffect(() => {}, [isAlertVisible]);

  return (
    <View>
      <FlatList
        data={responseData}
        renderItem={item =>
          setList(item, () => {
            setAlertVisible(true);
            setSelectedData(item)
          })
        }
        keyExtractor={item => item.id.toString()}
      />

      {selectedData && <CustomAlert
        visible={isAlertVisible}
        onNoClick={() => {
          setAlertVisible(false);
        }}
        description={selectedData.item.name}
      />}
    </View>
  );
};

export default HomeScreen;
