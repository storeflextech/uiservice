

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://sandbox.cashfree.com/pg/orders",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\"customer_details\":{\"customer_id\":\"12345\",\"customer_email\":\"test@cashfree.com\",\"customer_phone\":\"9908734801\"},\"order_amount\":4,\"order_currency\":\"INR\",\"order_note\":\"test order\"}",
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Content-Type: application/json",
    "x-api-version: 2022-01-01",
    "x-client-id: <app Id>",
     "x-client-secret: <secret key>"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  header('Content-Type: application/json; charset=utf-8');
  console.log(json_encode(array("error" = 1)));
  console.log("cURL Error #:" . $err);
  die();

} else {
  $result = json_decode($response, true);
  header('Content-Type: application/json; charset=utf-8');
  $output = array("order_token" = $result["order_token"]);
  console.log(json_encode($output));
  die();
}
