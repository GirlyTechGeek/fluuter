import 'package:flutter/material.dart';
import 'loginform.dart';


void main(){
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Contacts App',


        home: Scaffold(
            //appBar: AppBar(
              //title: Text("Login"),
           // ),
            body: LoginForm()
        )
    );
  }
}

// Create a Login Form Widget

