def caesar_cipher(text, shift):
   """
   Encrypts or decrypts a text using Caesar Cipher
   
   Parameters:
   text (str): The input text to encrypt or decrypt
   shift (int): The number of positions to shift. Use negative for decryption
   
   Returns:
   str: The resulting encrypted or decrypted text
   """
   result = ""
   for char in text:
       if char.isalpha(): # Check if the character is a letter
           start = ord('A') if char.isupper() else ord('a')
           # Shift character and wrap around using modulo
           result += chr((ord(char) - start + shift) % 26 + start)
       else:
           # Non-alphabetic characters remain unchanged
           result += char
   return result
# Example Usage
plaintext = "jweamztmtwwaz"
shift_value = -8
# Encrypt the plaintext
encrypted_text = caesar_cipher(plaintext, shift_value)
print("Encrypted:", encrypted_text)
# Decrypt the ciphertext
decrypted_text = caesar_cipher(encrypted_text, -shift_value)
print("Decrypted:", decrypted_text)