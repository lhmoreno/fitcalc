import { useState } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, ScrollView, TouchableNativeFeedback, Modal, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

interface FoodProps {
  name: string
  value: number 
}

interface FoodGroupProps {
  title: string
  foods: FoodProps[]
}

const foodGroupData: FoodGroupProps[] = [
  {
    title: 'Café da manhã',
    foods: [
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 },
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 },
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 }
    ]
  },
  {
    title: 'Café da tarde',
    foods: [
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 },
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 },
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 },
      { name: 'Arroz', value: 1.3 },
      { name: 'Feijão', value: 3.27 }
    ]
  }
]

const foodsData: FoodProps[] = []

foodGroupData.forEach(({foods}) => foods.forEach((food) => foodsData.push(food)))

export function Foods() {
  const [preview, setPreview] = useState<'all'|'group'>('all')
  const [modalVisible, setModalVisible] = useState(true)

  return (
    <View style={styles.container}>
      <View style={styles.selectButtonsContainer}>
        <TouchableWithoutFeedback onPress={() => setPreview('all')}>
          <View 
            style={[
              styles.selectButton, 
              preview === 'all' && styles.selectButtonActive,
              { 
                borderRightWidth: 1,
                borderTopLeftRadius: 8, 
                borderBottomLeftRadius: 8 
              } 
            ]}
          >
            <Text 
              style={[styles.textSelectButton, preview === 'all' && styles.textSelectButtonActive]}
            >
              TODOS
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setPreview('group')}>
          <View 
            style={[
              styles.selectButton, 
              preview === 'group' && styles.selectButtonActive,
              { 
                borderLeftWidth: 1,
                borderTopRightRadius: 8, 
                borderBottomRightRadius: 8 
              } 
            ]}
          >
            <Text 
              style={[styles.textSelectButton, preview === 'group' && styles.textSelectButtonActive]}
            >
                POR GRUPO
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <ScrollView style={styles.scrollContainer}>
        { preview === 'all' && foodsData.map(({ name, value }, index) => (
            <Food key={String(index)} name={name} value={value} />
          ))
        }

        { preview === 'group' && foodGroupData.map(({ title, foods }, index) => (
            <FoodGroup key={String(index)} title={title} foods={foods} />
          ))
        }
      </ScrollView>

      <TouchableWithoutFeedback>
        <View style={styles.floatButton}>
        <Ionicons name="add" color="white" size={40}/>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.modalBackgroundContainer}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Novo Alimento</Text>
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.modalTextCancel}>CANCELAR</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.6}>
                <Text style={styles.modalTextUp}>ADICIONAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

function FoodGroup({ title, foods }: FoodGroupProps) {
  return (
    <View style={styles.foodGroupContainer}>
      <Text style={styles.foodGroupTitle}>{title}</Text>
      { foods.map(({ name, value }, index) => (
          <Food key={String(index)} name={name} value={value} />
        ))
      }
    </View>
  )
}

function Food({ name, value }: FoodProps) {
  return (
    <TouchableNativeFeedback>
      <View style={styles.foodContainer}>
        <View style={styles.foodIconContainer}>
          <Ionicons name="fast-food" color="white" size={32}/>
        </View>
        <View style={styles.foodInfoContainer}>
          <Text style={styles.foodInfoName}>{name}</Text>
          <Text style={styles.foodInfoValue}>{value} c/g</Text>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  selectButtonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16
  },
  selectButton: {
    width: '50%',
    paddingTop: 6,
    paddingBottom: 4,
    borderColor: '#BABABA',
    borderWidth: 1
  },
  selectButtonActive: {
    backgroundColor: '#50B22D',
    borderColor: '#50B22D'
  },
  textSelectButton: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    textAlign: 'center',
    color: '#BABABA'
  },
  textSelectButtonActive: {
    fontFamily: 'Poppins_700Bold',
    color: 'white'
  },
  scrollContainer: {
    width: '100%'
  },
  foodContainer: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  foodIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: '#50B22D',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  foodInfoContainer: {
    marginHorizontal: 16,
    justifyContent: 'center'
  },
  foodInfoName: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 18,
    color: '#1F1F1F'
  },
  foodInfoValue: {
    fontFamily: 'Poppins_400Regular',
  },
  toolsContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  foodGroupContainer: {
    marginBottom: 24
  },
  foodGroupTitle: {
    marginLeft: 16,
    fontFamily: 'JetBrainsMono_700Bold',
    fontSize: 24
  },
  floatButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 64,
    height: 64,
    backgroundColor: '#50B22D',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBackgroundContainer: {
    flex: 1, 
    paddingHorizontal: 16,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#0005'
  },
  modalContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 2
  },
  modalTitle: {
    fontFamily: 'JetBrainsMono_800ExtraBold',
    fontSize: 24,
    textAlign: 'center',
    color: '#50B22D'
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  modalTextCancel: {
    marginRight: 8,
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#BABABA'
  },
  modalTextUp: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 16,
    color: '#50B22D'
  }
})
