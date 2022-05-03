import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik'
import * as yup from 'yup'

export default function App() {
  //funcao para criar usuario
  function createUserInPython(values) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": values.name,
      "password": values.password,
      "email": values.email,
      "phone": values.phone,
      "adress": values.adress,
      "profession": values.profession


    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
      mode: 'no-cors',
    };

    fetch("http://localhost:8000/userAdd", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    alert("Pessoa cadatrada")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de clientes</Text>
      <Formik
        styles={{}}
        validateOnMount={true}
        validationSchema={loginValidationSchema}
        initialValues={
          {
            name: '',
            password: '',
            email: '',
            phone: '',
            adress: '',
            profession: ''
          }
        }
        onSubmit={values => createUserInPython(values)}

      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          resetForm
        }) => (
          <>

            <TextInput
              name="name"
              type={'name'}
              value={values.name}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              style={styles.inputStyle}
              placeholder="Digite seu nome"

            />
            {(errors.name && touched.name) &&
              <Text style={styles.errorText}>{errors.name}</Text>
            }

            <TextInput
              name="email"
              type={'email'}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              style={styles.inputStyle}
              placeholder="E-mail"

            />
            {(errors.email && touched.email) &&
              <Text style={styles.errorText}>{errors.email}</Text>
            }

            <TextInput
              name="password"
              placeholder="Senha"
              style={styles.inputStyle}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry
            />
            {(errors.password && touched.password) &&
              <Text style={styles.errorText}>{errors.password}</Text>
            }

            <TextInput
              name="phone"
              placeholder="Digite seu telefone"
              style={styles.inputStyle}
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}

            />
            {(errors.phone && touched.phone) &&
              <Text style={styles.errorText}>{errors.phone}</Text>
            }

            <TextInput
              name="adress"
              placeholder="Digite seu endereço"
              style={styles.inputStyle}
              onChangeText={handleChange('adress')}
              onBlur={handleBlur('adress')}
              value={values.adress}

            />
            {(errors.adress && touched.adress) &&
              <Text style={styles.errorText}>{errors.adress}</Text>
            }

            <TextInput
              name="profession"
              placeholder="Digite sua profissão"
              style={styles.inputStyle}
              onChangeText={handleChange('profession')}
              onBlur={handleBlur('profession')}
              value={values.profession}

            />
            {(errors.profession && touched.profession) &&
              <Text style={styles.errorText}>{errors.profession}</Text>
            }

            <View style={styles.loginButton} >
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.textLoginButton} >Fazer Cadastro</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.loginButton, { backgroundColor: 'gray' }]} >
              <TouchableOpacity onPress={resetForm}>
                <Text style={styles.textLoginButton} >Apagar Campo</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: '6%',
  },
  title: {
    fontSize: 32,
    color: "#0f1b59",
    marginBottom: '5%'
  },
  inputStyle: {
    width: 220,
    height: 35,
    borderRadius: 50,
    borderColor: "#263272",
    borderWidth: 1.5,
    padding: 13,
    marginVertical: 10,
  },
  loginButton: {
    width: 220,
    height: 45,
    backgroundColor: "#0f1b59",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginVertical: 10
  },
  textLoginButton: {
    fontSize: 16,
    color: "#f4f5f5",
    fontWeight: '500'
  },
  errorText: {
    fontSize: 11,
    color: 'red'
  }

});

//Configuracoes do formik 

const loginValidationSchema = yup.object().shape({
  name: yup
    .string()
    .required('É necessário um name válido.'),
  email: yup
    .string()
    //.email('É necessário um email válido.')
    .required('É necessário um email válido.'),
  password: yup
    .string()
    .min(6, ({ min }) => `A senha deve conter pelo menos ${min} caracteres`)
    .required('É necessário uma senha válida.'),
  phone: yup
    .string()
    .min(11, ({ min }) => `O telefone deve conter pelo menos ${min} caracteres`)
    .required('É necessário um telefone válido.'),
  adress: yup
    .string()
    .min(5, ({ min }) => `O enderco deve conter pelo menos ${min} caracteres`)
    .required('É necessário um endereço válido.'),
  profession: yup
    .string()
    .min(3, ({ min }) => `O aproficao deve conter pelo menos ${min} caracteres`)
    .required('É necessário uma profissão válida.'),

})


