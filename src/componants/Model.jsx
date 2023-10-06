import React from 'react';

const Model = () => {
    return (
        <div>
            <div class="card">
  <h2>تسجيل الدخول</h2>
  <form>
    <input type="text" id="name" name="name" placeholder="الاسم" required/>
    <input type="email" id="email" name="email" placeholder="البريد الإلكتروني" required/>
    <input type="password" id="password" name="password" placeholder="كلمة المرور" required/>
    <input type="text" id="phone" name="phone" placeholder="رقم الهاتف" required/>
    <input type="text" id="address" name="address" placeholder="العنوان" required/>
    <button type="submit">تسجيل الدخول</button>
  </form>
        </div>
        </div>
    );
}

export default Model;
