import 'package:flutter/material.dart';

class MyHomePage extends StatelessWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Image(
                image: AssetImage('images/sample.png'), width: 80, height: 80),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextButton(
                  style: ButtonStyle(
                    foregroundColor:
                        MaterialStateProperty.all<Color>(Colors.blue),
                  ),
                  onPressed: () {
                    print('You clicked the button!');
                  },
                  child: const Text('TextButton 1'),
                ),
                TextButton(
                  style: ButtonStyle(
                    foregroundColor:
                        MaterialStateProperty.all<Color>(Colors.blue),
                  ),
                  onPressed: () {
                    print('You clicked the button!');
                  },
                  child: const Text('TextButton 2'),
                )
              ],
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                TextButton(
                  style: ButtonStyle(
                    foregroundColor:
                        MaterialStateProperty.all<Color>(Colors.blue),
                  ),
                  onPressed: () {
                    print('You clicked the button!');
                  },
                  child: const Text('TextButton 1'),
                ),
                TextButton(
                  style: ButtonStyle(
                    foregroundColor:
                        MaterialStateProperty.all<Color>(Colors.blue),
                  ),
                  onPressed: () {
                    print('You clicked the button!');
                  },
                  child: const Text('TextButton 2'),
                )
              ],
            ),
            Container(
              margin: const EdgeInsets.only(left: 20.0, right: 20.0),
              child: const TextField(
                decoration: const InputDecoration(
                  border: const OutlineInputBorder(),
                  labelText: 'Enter your name',
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
