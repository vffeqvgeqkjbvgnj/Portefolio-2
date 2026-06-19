def caesar_encryption(text: str, shift: int = -8) -> str:
   if text is None:
       return None
   result = ""
   for char in text:
       if char.isalpha() and char.isascii():
           if char.islower():
               result += chr((ord(char) - ord('a') + shift) % 26 + ord('a'))
           else:
               result += chr((ord(char) - ord('A') + shift) % 26 + ord('A'))
       else:
           result += char
   return result
if __name__ == "__main__":
   message = input("Entrez le texte à chiffrer : ")
   print("jweamztmtwwamz:", caesar_encryption(message))