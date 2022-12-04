from django.views import View
from django.shortcuts import render


class VanillaJSView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'react_interview/display_api_with_vanilla_js.html')


class ReactView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'react_interview/display_api_with_react.html')
